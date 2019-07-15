using System.Collections.Generic;
using System.Linq;
using VmmApi.Net.DataServices;
using VmmApi.Net.DataServices.Entities;

namespace VmmApi.Net.Services
{
    public interface IEventTypeService
    {
        IEnumerable<EventType> GetAllEventTypes();
    }

    public class EventTypeService : IEventTypeService
    {
        private readonly VmmDbContext dbContext;

        public EventTypeService(VmmDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public IEnumerable<EventType> GetAllEventTypes()
        {
            return this.dbContext.EventTypes.ToList();
        }
    }
}