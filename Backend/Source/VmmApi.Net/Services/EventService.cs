using System.Collections.Generic;
using System.Linq;
using System.Web.UI.WebControls;
using VmmApi.Net.DataServices;
using VmmApi.Net.DataServices.Entities;
using VmmApi.Net.Models;

namespace VmmApi.Net.Services
{
    public interface IEventService
    {
        EventViewModel GetAllEvents();
        Event GetById(int id);
        void Save(Event eventModel);
        void Delete(int id);
    }

    public class EventService : IEventService
    {
        private readonly IEventTypeService eventTypeService;
        private readonly IAreaService areaService;
        private readonly IStateService stateService;
        private readonly IDistrictService districtService;
        private readonly ITalukaService talukaService;
        private readonly VmmDbContext dbContext;

        public EventService(VmmDbContext dbContext, IEventTypeService eventTypeService, IAreaService areaService,
            IStateService stateService, IDistrictService districtService, ITalukaService talukaService)
        {
            this.dbContext = dbContext;
            this.eventTypeService = eventTypeService;
            this.areaService = areaService;
            this.stateService = stateService;
            this.districtService = districtService;
            this.talukaService = talukaService;    
        }

        public EventViewModel GetAllEvents()
        {
            return new EventViewModel
            {
                Events = this.dbContext.Events.OrderByDescending(e => e.Active).OrderByDescending(e => e.StartDate),
                Eventtypes = this.eventTypeService.GetAllEventTypes().Eventtypes,
                Areas = this.areaService.GetAllAreas().Areas,
                States = this.stateService.GetAllStates().States,
                Districts = this.districtService.GetAllDistricts().Districts,
                Taluka = this.talukaService.GetAllTaluka().Taluka
            };
        }

        public Event GetById(int id)
        {
            return this.dbContext.Events.FirstOrDefault(e => e.Id == id);
        }

        public void Save(Event eventModel)
        {
            this.dbContext.Events.Add(eventModel);

            if (eventModel.Id > 0)
            {
                this.dbContext.Entry(eventModel).State = System.Data.Entity.EntityState.Modified;
            }

            this.dbContext.SaveChanges();
        }


        public void Delete(int id)
        {
            var entity = this.GetById(id);
            if (entity != null)
            {
                this.dbContext.Events.Remove(entity);
                this.dbContext.SaveChanges();
            }
        }

    }
}