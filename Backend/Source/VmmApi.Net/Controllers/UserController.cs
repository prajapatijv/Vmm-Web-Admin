using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Results;
using VmmApi.Net.DataServices.Entities;
using VmmApi.Net.Services;

namespace VmmApi.Net.Controllers
{
    [Route("api/users")]

    public class UserController : BaseController
    {
        private readonly IUserService userService;

        public UserController(IUserService userService)
        {
            this.userService = userService;
        }

        [HttpGet]
        public JsonResult<IEnumerable<User>> Get()
        {
            var users = this.userService.GetAllUsers();
            users.ToList().ForEach(u => u.Password = string.Empty);
            return Json(users);
        }
    }
}