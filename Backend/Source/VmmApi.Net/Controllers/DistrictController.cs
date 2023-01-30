using System.Web.Http;
using VmmApi.Net.DataServices.Entities;
using VmmApi.Net.Models;
using VmmApi.Net.Services;

namespace VmmApi.Net.Controllers
{
    [RoutePrefix("api/districts")]
    public class DistrictController : BaseController
    {
        private readonly IDistrictService districtService;

        public DistrictController(IDistrictService districtService)
        {
            this.districtService = districtService;
        }

        [HttpGet]
        [Route("")]
        public IHttpActionResult Get()
        {
            var districts = this.districtService.GetAllDistricts();
            return Ok(districts);
        }

        [HttpPost]
        [Route("")]
        public IHttpActionResult Post(District district)
        {
            this.districtService.Save(district);
            return Get();
        }

        [HttpDelete]
        [Route("{id}")]
        public IHttpActionResult Delete(int id)
        {
            if (id > 0)
            {
                this.districtService.Delete(id);
            }

            return Ok();
        }

    }
}