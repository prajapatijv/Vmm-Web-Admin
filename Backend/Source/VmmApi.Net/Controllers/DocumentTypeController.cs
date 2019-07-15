using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Results;
using VmmApi.Net.DataServices.Entities;
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
        public JsonResult<IEnumerable<DocumentType>> Get()
        {
            var documentTypes = this.documentTypeService.GetAllDocumentTypes();
            return Json(documentTypes);
        }
    }

}