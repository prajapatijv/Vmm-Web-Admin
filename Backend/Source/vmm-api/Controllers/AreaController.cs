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
    public class AreaController : Controller
    {
        private readonly IAreaService areaService;

        public AreaController(IAreaService areaService)
        {
            this.areaService = areaService;
        }

        [HttpGet]
        public JsonResult Get()
        {
            var areas = this.areaService.GetAllAreas();
            return Json(areas);
        }
    }
}