﻿using System.Web.Http;
using VmmApi.Net.Models;
using VmmApi.Net.Services;

namespace VmmApi.Net.Controllers
{
    public class AuthController : ApiController
    {
        private readonly IAuthenticateService authenticateService;

        public AuthController(IAuthenticateService authenticateService)
        {
            this.authenticateService = authenticateService;
        }

        [AllowAnonymous]
        [HttpPost]
        public IHttpActionResult RequestToken(TokenRequest request)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var user = authenticateService.AuthenticateUser(request, out string token);

            if (user != null)
            {
                return Ok(user);
            }

            return BadRequest("Invalid Request");
        }
    }
}