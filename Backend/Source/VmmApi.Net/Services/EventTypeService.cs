using System.Collections.Generic;
using System.Linq;
using VmmApi.Net.DataServices;
using VmmApi.Net.DataServices.Entities;
using VmmApi.Net.Models;

namespace VmmApi.Net.Services
{
    public interface IEventTypeService
    {
        EventtTypeViewModel GetAllEventTypes();
        EventType GetById(int id);
        void Save(EventType eventType);
        void Delete(int id);

    }

    public class EventTypeService : IEventTypeService
    {
        private readonly VmmDbContext dbContext;

        public EventTypeService(VmmDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public EventtTypeViewModel GetAllEventTypes()
        {
            return new EventtTypeViewModel
            {
                Eventtypes = this.dbContext.EventTypes.ToList()
            };
        }

        public EventType GetById(int id)
        {
            return this.dbContext.EventTypes.FirstOrDefault(e => e.Id == id);
        }

                
        public void Delete(int id)
        {
            var entity = this.GetById(id);
            if (entity != null)
            {
                this.dbContext.EventTypes.Remove(entity);
                this.dbContext.SaveChanges();
            }
        }

        public void Save(EventType eventType)
        {
            this.dbContext.EventTypes.Add(eventType);

            if (eventType.Id > 0)
            {
                this.dbContext.Entry(eventType).State = System.Data.Entity.EntityState.Modified;
            }

            this.dbContext.SaveChanges();
        }
    }
}