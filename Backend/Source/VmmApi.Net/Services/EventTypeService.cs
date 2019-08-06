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
    }
}