using Microsoft.IdentityModel.Tokens;
using System;
using System.Security.Claims;
using System.Text;
using VmmApi.Net.Core;
using VmmApi.Net.Jwt;
using VmmApi.Net.Models;

namespace VmmApi.Net.Services
{
    public interface IAuthenticateService
    {
        UserViewModel AuthenticateUser(TokenRequest request);
    }

    public class JwtTokenAuthenticationService : IAuthenticateService
    {
        private readonly IUserService userService;
        private readonly JwtIssuer jwtIssuer;

        public JwtTokenAuthenticationService(IUserService userService, JwtIssuer jwtIssuer)
        {
            this.userService = userService;
            this.jwtIssuer = jwtIssuer;
        }

        public UserViewModel AuthenticateUser(TokenRequest request)
        {

            var authUser = userService.Authenticate(request.Username, request.Password);
            if (authUser == null) return null;

            var jwtToken = this.jwtIssuer.IssueToken(
                "id", authUser.UserName,
                "username", authUser.UserName,
                "loggedInAt", DateTime.UtcNow.ToString("o")
            );

            return new UserViewModel { UserName = authUser.UserName, AuthToken = jwtToken };
        }
    }
}
