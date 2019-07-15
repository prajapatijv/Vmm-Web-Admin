using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Results;
using VmmApi.Net.DataServices.Entities;
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
        public JsonResult<IEnumerable<EventType>> Get()
        {
            var eventTypes = this.eventTypeService.GetAllEventTypes();
            return Json(eventTypes);
        }
    }
}