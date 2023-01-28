using System.Collections.Generic;
using System.Linq;
using VmmApi.Net.DataServices;
using VmmApi.Net.DataServices.Entities;
using VmmApi.Net.Models;

namespace VmmApi.Net.Services
{
    public interface IDistrictService
    {
        DistrictViewModel GetAllDistricts();
        District GetById(int id);
        void Save(District district);
        void Delete(int id);
    }

    public class DistrictService : IDistrictService
    {
        private readonly VmmDbContext dbContext;

        public DistrictService(VmmDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public DistrictViewModel GetAllDistricts()
        {
            return new DistrictViewModel
            {
                Districts = this.dbContext.District.ToList()
            };
        }

        public District GetById(int id)
        {
            return this.dbContext.District.FirstOrDefault(e => e.Id == id);
        }

                
        public void Delete(int id)
        {
            var entity = this.GetById(id);
            if (entity != null)
            {
                this.dbContext.District.Remove(entity);
                this.dbContext.SaveChanges();
            }
        }

        public void Save(District district)
        {
            this.dbContext.District.Add(district);

            if (district.Id > 0)
            {
                this.dbContext.Entry(district).State = System.Data.Entity.EntityState.Modified;
            }

            this.dbContext.SaveChanges();
        }

    }
}