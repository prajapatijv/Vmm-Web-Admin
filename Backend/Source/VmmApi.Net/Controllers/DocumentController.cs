using System.Web.Http;
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
    }
}