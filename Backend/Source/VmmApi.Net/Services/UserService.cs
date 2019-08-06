using System;
using System.Collections.Generic;
using System.Linq;
using VmmApi.Net.DataServices;
using VmmApi.Net.DataServices.Entities;
using VmmApi.Net.Models;

namespace VmmApi.Net.Services
{
    public interface IUserService
    {
        User Authenticate(string userName, string password);
        UserViewModel GetAllUsers();
    }

    public class UserService : IUserService
    {
        private readonly VmmDbContext dbContext;

        public UserService(VmmDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public User Authenticate(string userName, string password)
        {
            var user = this.dbContext.Users.FirstOrDefault(u => u.UserName.Equals(u.UserName, StringComparison.OrdinalIgnoreCase));

            if (null != user)
            {
                return user.Password == password ? user : null;
            }

            return null;
        }

        public UserViewModel GetAllUsers()
        {
            var users = this.dbContext.Users.ToList();
            users.ToList().ForEach(u => u.Password = string.Empty);

            return new UserViewModel
            {
                Users = users
            };
        }
    }
}