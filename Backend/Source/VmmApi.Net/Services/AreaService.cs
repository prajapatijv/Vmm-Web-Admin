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
        Area GetById(int id);
        void Save(Area area);
        void Delete(int id);
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

        public Area GetById(int id)
        {
            return this.dbContext.Areas.FirstOrDefault(e => e.Id == id);
        }

                
        public void Delete(int id)
        {
            var entity = this.GetById(id);
            if (entity != null)
            {
                this.dbContext.Areas.Remove(entity);
                this.dbContext.SaveChanges();
            }
        }

        public void Save(Area area)
        {
            this.dbContext.Areas.Add(area);

            if (area.Id > 0)
            {
                this.dbContext.Entry(area).State = System.Data.Entity.EntityState.Modified;
            }

            this.dbContext.SaveChanges();
        }

    }
}