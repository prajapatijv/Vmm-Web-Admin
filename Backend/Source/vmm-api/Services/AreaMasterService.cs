using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VmmApi.DataServices;
using VmmApi.DataServices.Entities;

namespace VmmApi.Services
{
    public interface IAreaMasterService
    {
        IEnumerable<AreaMaster> GetAllAreas();
    }

    public class AreaMasterService : IAreaMasterService
    {
        private readonly VMMDbContext dbContext;

        public AreaMasterService(VMMDbContext dbContext)
        {
            this.dbContext = dbContext; 
        }

        public IEnumerable<AreaMaster> GetAllAreas()
        {
            return this.dbContext.AreaMasters.ToList();
        }
    }
}
