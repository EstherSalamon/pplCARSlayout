using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Scaffolding;
using withoutLayout.Data;

namespace withoutLayout.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleController : ControllerBase
    {
        private string _connectionString;

        public PeopleController(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("ConStr");
        }

        [Route("getpeople")]
        public List<Person> GetPeoples()
        {
            Repository repo = new Repository(_connectionString);
            return repo.GetPeople();
        }

        [Route("add")]
        [HttpPost]
        public void AddPerson(Person p)
        {
            Repository elephant = new Repository(_connectionString);
            elephant.AddPerson(p);
        }

        [Route("getbyid")]
        public Person GetByID(int id)
        {
            Repository cats = new Repository(_connectionString);
            return cats.GetByID(id);
        }
    }
}
