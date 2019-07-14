using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using VmmApi.DataServices.Entities;
using VmmApi.Services;

namespace VmmApi.Controllers
{
    [Route("api/users")]

    public class UserController : VMMControllerBase
    {
        private readonly IUserService userService;

        public UserController(IUserService userService)
        {
            this.userService = userService;
        }

        [HttpGet]
        public JsonResult Get()
        {
            var users = this.userService.GetAllUsers();
            users.ToList().ForEach(u => u.Password = string.Empty); 
            return Json(users);
        }
    }
}