using System;
using System.Net;
using System.Net.Http;
using System.Net.Http.Formatting;
using System.Net.Http.Headers;
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
                response.Content = new ObjectContent<UserViewModel>(user, new JsonMediaTypeFormatter());
                CookieHeaderValue cookie = new CookieHeaderValue("session-id", user.AuthToken);
                cookie.Expires = DateTimeOffset.Now.AddDays(2);
                cookie.Domain = "localhost";
                cookie.HttpOnly = true;
                cookie.Path = "/";

                response.Headers.AddCookies(new CookieHeaderValue[] {cookie});

                return response;
            }

            return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Invalid request");
        }
    }
}