using System.Collections.Generic;
using System.Linq;
using VmmApi.Net.DataServices;
using VmmApi.Net.DataServices.Entities;
using VmmApi.Net.Models;

namespace VmmApi.Net.Services
{
    public interface IAreaService
    {
        AreaViewModel GetAllAreas();
    }

    public class AreaService : IAreaService
    {
        private readonly VmmDbContext dbContext;

        public AreaService(VmmDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public AreaViewModel GetAllAreas()
        {
            return new AreaViewModel
            {
                Areas = this.dbContext.Areas.ToList()
            };
        }
    }
}