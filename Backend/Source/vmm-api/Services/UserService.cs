using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VmmApi.DataServices;
using VmmApi.DataServices.Entities;

namespace VmmApi.Services
{
    public interface IUserService
    {
        User Authenticate(string userName, string password);
        IEnumerable<User> GetAllUsers();
    }

    public class UserService : IUserService
    {
        private readonly VMMDbContext dbContext;

        public UserService(VMMDbContext dbContext)
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
