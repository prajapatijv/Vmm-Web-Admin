using System.Web.Http;
using VmmApi.Net.DataServices.Entities;
using VmmApi.Net.Models;
using VmmApi.Net.Services;

namespace VmmApi.Net.Controllers
{
    [Route("api/documents")]
    public class DocumentController : BaseController
    {
        private readonly IDocumentService documentService;

        public DocumentController(IDocumentService documentService)
        {
            this.documentService = documentService;
        }

        [HttpGet]
        public IHttpActionResult Get()
        {
            var documents = this.documentService.GetAllDocuments();
            return Ok(documents);
        }


        [HttpPost]
        [Route("")]
        public IHttpActionResult Post(Document document)
        {
            this.documentService.Save(document);
            return Get();
        }

        [HttpDelete]
        [Route("{id}")]
        public IHttpActionResult Delete(int id)
        {
            if (id > 0)
            {
                this.documentService.Delete(id);
            }

            return Ok();
        }

    }
}