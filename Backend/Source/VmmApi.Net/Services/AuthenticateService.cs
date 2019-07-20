using Microsoft.IdentityModel.Tokens;
using System;
using System.Security.Claims;
using System.Text;
using VmmApi.Net.Core;
using VmmApi.Net.Models;

namespace VmmApi.Net.Services
{
    public interface IAuthenticateService
    {
        UserViewModel AuthenticateUser(TokenRequest request, out string token);
    }

    public class JwtTokenAuthenticationService : IAuthenticateService
    {
        private readonly IUserService userService;

        public JwtTokenAuthenticationService(IUserService userService)
        {
            this.userService = userService;
        }

        public UserViewModel AuthenticateUser(TokenRequest request, out string token)
        {
            token = string.Empty;
            var authUser = userService.Authenticate(request.Username, request.Password);
            if (authUser == null) return null;

            return new UserViewModel { UserName = authUser.UserName, AuthToken = token };
        }
    }
}
