using System.Web.Http;
using VmmApi.Net.DataServices.Entities;
using VmmApi.Net.Models;
using VmmApi.Net.Services;

namespace VmmApi.Net.Controllers
{
    [RoutePrefix("api/queries")]
    public class QueryController : BaseController
    {
        private readonly IQueryService queryService;

        public QueryController(IQueryService queryService)
        {
            this.queryService = queryService;
        }

        [HttpGet]
        [Route("")]
        public IHttpActionResult Get()
        {
            var areas = this.queryService.GetAllQueries();
            return Ok(areas);
        }

        [HttpPost]
        [Route("")]
        public IHttpActionResult Post(QueryDetail queryDetail)
        {
            this.queryService.Save(queryDetail);
            return Get();
        }

        [HttpDelete]
        [Route("{id}")]
        public IHttpActionResult Delete(int id)
        {
            if (id > 0)
            {
                this.queryService.Delete(id);
            }

            return Ok();
        }

    }
}