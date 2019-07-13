using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using VmmApi.DataServices.Entities;
using VmmApi.Services;

namespace VmmApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : Controller
    {
        private readonly IAuthenticateService authenticateService;

        public AuthController(IAuthenticateService authenticateService)
        {
            this.authenticateService = authenticateService;
        }

        [AllowAnonymous]
        [HttpPost]
        public IActionResult RequestToken(TokenRequest request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (authenticateService.IsAuthenticated(request, out string token))
            {
                return Ok(token);
            }

            return BadRequest("Invalid Request");
        }
    }
}