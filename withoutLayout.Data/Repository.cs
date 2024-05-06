using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace withoutLayout.Data
{
    public class Repository
    {
        private readonly string _connectionString;

        public Repository(string connection)
        {
            _connectionString = connection;
        }

        public List<Person> GetPeople()
        {
            using var context = new PeopleCarsDataContext(_connectionString);
            return context.People.Include(person => person.Cars).ToList();
        }

        public void AddPerson(Person p)
        {
            using var context = new PeopleCarsDataContext(_connectionString);
            context.People.Add(p);
            context.SaveChanges();
        }

        public void DeletePerson(int id)
        {
            using var context = new PeopleCarsDataContext(_connectionString);
            context.Database.ExecuteSqlInterpolated($"DELETE FROM People P WHERE P.ID = {id} DELETE FROM Cars C WHERE C.PersonID = {id}");
        }

        public void DeleteEF(Person p)
        {
            using var context = new PeopleCarsDataContext(_connectionString);
            context.Remove(p);
        }

        public void AddCar(Car c)
        {
            using var context = new PeopleCarsDataContext(_connectionString);
            context.Cars.Add(c);
            context.SaveChanges();
        }

        public Person GetByID(int id)
        {
            using var context = new PeopleCarsDataContext(_connectionString);
            List<Person> list = context.People.Where(p => p.ID == id).Include(p => p.Cars).ToList();
            return list[0];
        }

        public void DeleteAllCars(int id)
        {
            using var context = new PeopleCarsDataContext(_connectionString);
            context.Database.ExecuteSqlInterpolated($"DELETE FROM Cars WHERE PersonID = {id}");
        }
    }
}
