using System.Web.Http;
using VmmApi.Net.Services;

namespace VmmApi.Net.Controllers
{
    [Route("api/eventTypes")]
    public class EventTypeController : BaseController
    {
        private readonly IEventTypeService eventTypeService;

        public EventTypeController(IEventTypeService eventTypeService)
        {
            this.eventTypeService = eventTypeService;
        }

        [HttpGet]
        public IHttpActionResult Get()
        {
            var eventTypes = this.eventTypeService.GetAllEventTypes();
            return Ok(eventTypes);
        }
    }
}