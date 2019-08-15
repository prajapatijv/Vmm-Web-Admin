using System.Web.Http;
using VmmApi.Net.DataServices.Entities;
using VmmApi.Net.Models;
using VmmApi.Net.Services;

namespace VmmApi.Net.Controllers
{
    [RoutePrefix("api/areas")]
    public class AreaController : BaseController
    {
        private readonly IAreaService areaService;

        public AreaController(IAreaService areaService)
        {
            this.areaService = areaService;
        }

        [HttpGet]
        [Route("")]
        public IHttpActionResult Get()
        {
            var areas = this.areaService.GetAllAreas();
            return Ok(areas);
        }

        [HttpPost]
        [Route("")]
        public IHttpActionResult Post(Area area)
        {
            this.areaService.Save(area);
            return Get();
        }

        [HttpDelete]
        [Route("{id}")]
        public IHttpActionResult Delete(int id)
        {
            if (id > 0)
            {
                this.areaService.Delete(id);
            }

            return Ok();
        }

    }
}