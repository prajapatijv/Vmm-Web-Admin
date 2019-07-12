using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using VmmApi.DataServices.Entities;
using VmmApi.Services;

namespace VmmApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventTypeController : Controller
    {
        private readonly IEventTypeService eventTypeService;

        public EventTypeController(IEventTypeService eventTypeService)
        {
            this.eventTypeService = eventTypeService;
        }

        [HttpGet]
        public JsonResult Get()
        {
            var eventTypes = this.eventTypeService.GetAllEventTypes();
            return Json(eventTypes);
        }
    }
}