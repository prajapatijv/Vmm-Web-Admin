using System.Collections.Generic;
using System.Linq;
using VmmApi.Net.DataServices;
using VmmApi.Net.DataServices.Entities;
using VmmApi.Net.Models;

namespace VmmApi.Net.Services
{
    public interface IEventService
    {
        EventViewModel GetAllEvents();
    }

    public class EventService : IEventService
    {
        private readonly IEventTypeService eventTypeService;
        private readonly VmmDbContext dbContext;

        public EventService(VmmDbContext dbContext, IEventTypeService eventTypeService)
        {
            this.dbContext = dbContext;
            this.eventTypeService = eventTypeService;
        }

        public EventViewModel GetAllEvents()
        {
            return new EventViewModel
            {
                Events = this.dbContext.Events.ToList(),
                Eventtypes = this.eventTypeService.GetAllEventTypes().Eventtypes
            };
        }
    }
}