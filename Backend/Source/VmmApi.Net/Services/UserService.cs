using System;
using System.Collections.Generic;
using System.Linq;
using VmmApi.Net.DataServices;
using VmmApi.Net.DataServices.Entities;

namespace VmmApi.Net.Services
{
    public interface IUserService
    {
        User Authenticate(string userName, string password);
        IEnumerable<User> GetAllUsers();
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

        public IEnumerable<User> GetAllUsers()
        {
            return this.dbContext.Users.ToList();
        }
    }
}