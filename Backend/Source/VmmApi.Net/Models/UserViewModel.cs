using System.Collections.Generic;
using VmmApi.Net.DataServices.Entities;

namespace VmmApi.Net.Models
{

    public class UserViewModel
    {
        public string UserName { get; set; }
        public string AuthToken { get; set; }

        public IEnumerable<User> Users { get; set; }

    }
}