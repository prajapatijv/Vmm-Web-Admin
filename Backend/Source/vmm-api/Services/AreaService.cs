using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VmmApi.DataServices;
using VmmApi.DataServices.Entities;

namespace VmmApi.Services
{
    public interface IAreaService
    {
        IEnumerable<Area> GetAllAreas();
    }

    public class AreaService : IAreaService
    {
        private readonly VMMDbContext dbContext;

        public AreaService(VMMDbContext dbContext)
        {
            this.dbContext = dbContext; 
        }

        public IEnumerable<Area> GetAllAreas()
        {
            return this.dbContext.Areas.ToList();
        }
    }
}
