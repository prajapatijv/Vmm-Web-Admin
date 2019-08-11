using System.Web.Http;
using VmmApi.Net.DataServices.Entities;
using VmmApi.Net.Models;
using VmmApi.Net.Services;

namespace VmmApi.Net.Controllers
{
    [RoutePrefix("api/events")]
    public class EventController : BaseController
    {
        private readonly IEventService eventService;

        public EventController(IEventService eventService)
        {
            this.eventService = eventService;
        }

        [HttpGet]
        [Route("")]
        public IHttpActionResult Get()
        {
            var events = this.eventService.GetAllEvents();
            return Ok(events);
        }

        [HttpPost]
        [Route("")]
        public IHttpActionResult Post(Event eventModel)
        {
            this.eventService.Save(eventModel);
            return Get();
        }

        [HttpDelete]
        [Route("{id}")]
        public IHttpActionResult Delete(int id)
        {
            if (id > 0)
            {
                this.eventService.Delete(id);
            }

            return Ok();
        }
    }
}