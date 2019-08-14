using System.Web.Http;
using VmmApi.Net.DataServices.Entities;
using VmmApi.Net.Models;
using VmmApi.Net.Services;

namespace VmmApi.Net.Controllers
{
    [RoutePrefix("api/eventTypes")]
    public class EventTypeController : BaseController
    {
        private readonly IEventTypeService eventTypeService;

        public EventTypeController(IEventTypeService eventTypeService)
        {
            this.eventTypeService = eventTypeService;
        }

        [HttpGet]
        [Route("")]
        public IHttpActionResult Get()
        {
            var eventTypes = this.eventTypeService.GetAllEventTypes();
            return Ok(eventTypes);
        }


        [HttpPost]
        [Route("")]
        public IHttpActionResult Post(EventType eventType)
        {
            this.eventTypeService.Save(eventType);
            return Get();
        }

        [HttpDelete]
        [Route("{id}")]
        public IHttpActionResult Delete(int id)
        {
            if (id > 0)
            {
                this.eventTypeService.Delete(id);
            }

            return Ok();
        }

    }
}