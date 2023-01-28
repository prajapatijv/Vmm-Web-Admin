using System.Collections.Generic;
using System.Linq;
using VmmApi.Net.DataServices;
using VmmApi.Net.DataServices.Entities;
using VmmApi.Net.Models;

namespace VmmApi.Net.Services
{
    public interface ITalukaService
    {
        TalukaViewModel GetAllTaluka();
        Taluka GetById(int id);
        void Save(Taluka taluka);
        void Delete(int id);
    }

    public class TalukaService : ITalukaService
    {
        private readonly VmmDbContext dbContext;

        public TalukaService(VmmDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public TalukaViewModel GetAllTaluka()
        {
            return new TalukaViewModel
            {
                Taluka = this.dbContext.Taluka.ToList()
            };
        }

        public Taluka GetById(int id)
        {
            return this.dbContext.Taluka.FirstOrDefault(e => e.Id == id);
        }

                
        public void Delete(int id)
        {
            var entity = this.GetById(id);
            if (entity != null)
            {
                this.dbContext.Taluka.Remove(entity);
                this.dbContext.SaveChanges();
            }
        }

        public void Save(Taluka taluka)
        {
            this.dbContext.Taluka.Add(taluka);

            if (taluka.Id > 0)
            {
                this.dbContext.Entry(taluka).State = System.Data.Entity.EntityState.Modified;
            }

            this.dbContext.SaveChanges();
        }

    }
}