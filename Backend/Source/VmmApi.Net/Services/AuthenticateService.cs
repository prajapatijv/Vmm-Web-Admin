using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using VmmApi.Net.Auth;
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
        private readonly TokenManagement tokenManagement;

        public JwtTokenAuthenticationService(IUserService userService, TokenManagement tokenManagement)
        {
            this.userService = userService;
            this.tokenManagement = tokenManagement;
        }

        public UserViewModel AuthenticateUser(TokenRequest request, out string token)
        {
            token = string.Empty;
            var authUser = userService.Authenticate(request.Username, request.Password);
            if (authUser == null) return null;

            var claim = new[]
            {
                new Claim(ClaimTypes.Name, authUser.UserName)
            };
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(tokenManagement.Secret));
            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var jwtToken = new JwtSecurityToken(
                tokenManagement.Issuer,
                tokenManagement.Audience,
                claim,
                expires: DateTime.Now.AddMinutes(tokenManagement.AccessExpiration),
                signingCredentials: credentials
            );
            token = new JwtSecurityTokenHandler().WriteToken(jwtToken);

            return new UserViewModel { UserName = authUser.UserName, AuthToken = token };
        }
    }
}
