using System.Collections.Generic;
using System.Linq;
using VmmApi.Net.DataServices;
using VmmApi.Net.DataServices.Entities;

namespace VmmApi.Net.Services
{
    public interface IAreaService
    {
        IEnumerable<Area> GetAllAreas();
    }

    public class AreaService : IAreaService
    {
        private readonly VmmDbContext dbContext;

        public AreaService(VmmDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public IEnumerable<Area> GetAllAreas()
        {
            return this.dbContext.Areas.ToList();
        }
    }
}