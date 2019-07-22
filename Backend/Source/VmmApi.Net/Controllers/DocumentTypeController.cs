using System.Web.Http;
using VmmApi.Net.Services;

namespace VmmApi.Net.Controllers
{
    [Route("api/documentTypes")]
    public class DocumentTypeController : BaseController
    {
        private readonly IDocumentTypeService documentTypeService;

        public DocumentTypeController(IDocumentTypeService documentTypeService)
        {
            this.documentTypeService = documentTypeService;
        }

        [HttpGet]
        public IHttpActionResult Get()
        {
            var documentTypes = this.documentTypeService.GetAllDocumentTypes();
            return Ok(documentTypes);
        }
    }

}