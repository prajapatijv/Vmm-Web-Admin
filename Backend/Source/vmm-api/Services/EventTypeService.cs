using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VmmApi.DataServices;
using VmmApi.DataServices.Entities;

namespace VmmApi.Services
{
    public interface IEventTypeService
    {
        IEnumerable<EventType> GetAllEventTypes();
    }

    public class EventTypeService : IEventTypeService
    {
        private readonly VMMDbContext dbContext;

        public EventTypeService(VMMDbContext dbContext)
        {
            this.dbContext = dbContext; 
        }

        public IEnumerable<EventType> GetAllEventTypes()
        {
            return this.dbContext.EventTypes.ToList();
        }
    }
}
