using System.Web.Http;
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
        public IHttpActionResult Get()
        {
            var areas = this.areaService.GetAllAreas();
            return Ok(areas);
        }
    }
}