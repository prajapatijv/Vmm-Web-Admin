using System.Web.Http;
using VmmApi.Net.DataServices.Entities;
using VmmApi.Net.Models;
using VmmApi.Net.Services;

namespace VmmApi.Net.Controllers
{
    [RoutePrefix("api/joinsamitis")]
    public class JoinSamitiController : BaseController
    {
        private readonly IJoinSamitiService joinSamitiService;

        public JoinSamitiController(IJoinSamitiService joinSamitiService)
        {
            this.joinSamitiService = joinSamitiService;
        }

        [HttpGet]
        [Route("")]
        public IHttpActionResult Get()
        {
            var joinSamitiViewModel = this.joinSamitiService.GetAll();
            return Ok(joinSamitiViewModel);
        }

        [HttpDelete]
        [Route("{id}")]
        public IHttpActionResult Delete(int id)
        {
            if (id > 0)
            {
                this.joinSamitiService.Delete(id);
            }

            return Ok();
        }
    }
}