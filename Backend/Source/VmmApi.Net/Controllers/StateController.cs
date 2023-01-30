using System.Web.Http;
using VmmApi.Net.DataServices.Entities;
using VmmApi.Net.Models;
using VmmApi.Net.Services;

namespace VmmApi.Net.Controllers
{
    [RoutePrefix("api/states")]
    public class StateController : BaseController
    {
        private readonly IStateService stateService;

        public StateController(IStateService stateService)
        {
            this.stateService = stateService;
        }

        [HttpGet]
        [Route("")]
        public IHttpActionResult Get()
        {
            var states = this.stateService.GetAllStates();
            return Ok(states);
        }

        [HttpPost]
        [Route("")]
        public IHttpActionResult Post(State state)
        {
            this.stateService.Save(state);
            return Get();
        }

        [HttpDelete]
        [Route("{id}")]
        public IHttpActionResult Delete(int id)
        {
            if (id > 0)
            {
                this.stateService.Delete(id);
            }

            return Ok();
        }

    }
}