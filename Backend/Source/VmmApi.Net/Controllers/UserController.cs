using System.Linq;
using System.Web.Http;
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
        public IHttpActionResult Get()
        {
            var users = this.userService.GetAllUsers();
            return Ok(users);
        }
    }
}