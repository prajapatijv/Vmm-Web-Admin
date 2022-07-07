using System.Linq;
using VmmApi.Net.DataServices;
using VmmApi.Net.DataServices.Entities;
using VmmApi.Net.Models;

namespace VmmApi.Net.Services
{
    public interface IJoinSamitiService
    {
        JoinSamitiViewModel GetAll();

        JoinSamiti GetById(int id);

        void Save(JoinSamiti joinSamiti);

        void Delete(int id);
    }

    public class JoinSamitiService : IJoinSamitiService
    {
        private readonly VmmDbContext dbContext;

        public JoinSamitiService(VmmDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public void Delete(int id)
        {
            var entity = this.GetById(id);
            if (entity != null)
            {
                this.dbContext.JoinSamitiRequests.Remove(entity);
                this.dbContext.SaveChanges();
            }
        }

        public JoinSamiti GetById(int id)
        {
            return this.dbContext.JoinSamitiRequests.FirstOrDefault(e => e.Id == id);
        }

        public JoinSamitiViewModel GetAll()
        {
            var items = this.dbContext.JoinSamitiRequests.OrderByDescending(o => o.RequestDate).ToList();
            var samitiTypes = this.dbContext.SamitiTypes.ToList();

            return new JoinSamitiViewModel
            {
                Joinsamitis = items,
                Samititypes = samitiTypes
            };
        }

        public void Save(JoinSamiti joinSamiti)
        {
            this.dbContext.JoinSamitiRequests.Add(joinSamiti);

            if (joinSamiti.Id > 0)
            {
                this.dbContext.Entry(joinSamiti).State = System.Data.Entity.EntityState.Modified;
            }

            this.dbContext.SaveChanges();
        }
    }

}