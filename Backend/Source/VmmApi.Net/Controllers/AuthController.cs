using System.Net;
using System.Net.Http;
using System.Web.Http;
using VmmApi.Net.Core;
using VmmApi.Net.Models;
using VmmApi.Net.Services;

namespace VmmApi.Net.Controllers
{
    [Route("api/authenticate")]
    [HandleExceptionFilter]
    public class AuthController : ApiController
    {
        private readonly IAuthenticateService authenticateService;

        public AuthController(IAuthenticateService authenticateService)
        {
            this.authenticateService = authenticateService;
        }

        [AllowAnonymous]
        [HttpPost]
        public HttpResponseMessage RequestToken(TokenRequest request)
        {
            var response = new HttpResponseMessage();

            if (!ModelState.IsValid)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }

            var user = authenticateService.AuthenticateUser(request);

            if (user != null)
            {
                return response;
            }

            return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Invalid request");
        }
    }
}