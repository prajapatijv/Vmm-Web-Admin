using System.Web.Http;
using VmmApi.Net.Services;

namespace VmmApi.Net.Controllers
{
    [Route("api/events")]
    public class EventController : BaseController
    {
        private readonly IEventService eventService;

        public EventController(IEventService eventService)
        {
            this.eventService = eventService;
        }

        [HttpGet]
        public IHttpActionResult Get()
        {
            var events = this.eventService.GetAllEvents();
            return Ok(events);
        }
    }
}