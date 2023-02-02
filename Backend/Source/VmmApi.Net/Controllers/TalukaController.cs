using System.Web.Http;
using VmmApi.Net.DataServices.Entities;
using VmmApi.Net.Models;
using VmmApi.Net.Services;

namespace VmmApi.Net.Controllers
{
    [RoutePrefix("api/talukas")]
    public class TalukaController : BaseController
    {
        private readonly ITalukaService talukaService;

        public TalukaController(ITalukaService talukaService)
        {
            this.talukaService = talukaService;
        }

        [HttpGet]
        [Route("")]
        public IHttpActionResult Get()
        {
            var taluka = this.talukaService.GetAllTaluka();
            return Ok(taluka);
        }

        [HttpPost]
        [Route("")]
        public IHttpActionResult Post(Taluka taluka)
        {
            this.talukaService.Save(taluka);
            return Get();
        }

        [HttpDelete]
        [Route("{id}")]
        public IHttpActionResult Delete(int id)
        {
            if (id > 0)
            {
                this.talukaService.Delete(id);
            }

            return Ok();
        }

    }
}