﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Scaffolding;
using withoutLayout.Data;
using withoutLayout.Web.Models;

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
            Repository repo = new(_connectionString);
            return repo.GetPeople();
        }

        [Route("add")]
        [HttpPost]
        public void AddPerson(Person p)
        {
            Repository elephant = new(_connectionString);
            elephant.AddPerson(p);
        }

        [Route("getbyid")]
        public Person GetByID(int id)
        {
            Repository cats = new(_connectionString);
            return cats.GetByID(id);
        }

        [Route("addcar")]
        [HttpPost]
        public void AddCar(CarVM vm)
        {
            Console.WriteLine(vm.Car);
            Repository cows = new(_connectionString);
            cows.AddCar(vm.Car);
        }

        [Route("farewellcars")]
        [HttpPost]
        public void DeleteCars(PersonIdVM vm)
        {
            Repository heGoats = new Repository(_connectionString);
            heGoats.DeleteAllCars(vm.PersonID);
        }
    }
}
