using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Results;
using VmmApi.Net.DataServices.Entities;
using VmmApi.Net.Services;

namespace VmmApi.Net.Controllers
{
    [Route("api/areas")]

    public class AreaController : BaseController
    {
        private readonly IAreaService areaService;

        public AreaController(IAreaService areaService)
        {
            this.areaService = areaService;
        }

        [HttpGet]
        public JsonResult<IEnumerable<Area>> Get()
        {
            var areas = this.areaService.GetAllAreas();
            return Json(areas);
        }
    }
}