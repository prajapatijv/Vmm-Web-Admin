using System.Web.Http;
using VmmApi.Net.DataServices.Entities;
using VmmApi.Net.Models;
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


        [HttpPost]
        [Route("")]
        public IHttpActionResult Post(DocumentType documentType)
        {
            this.documentTypeService.Save(documentType);
            return Get();
        }

        [HttpDelete]
        [Route("{id}")]
        public IHttpActionResult Delete(int id)
        {
            if (id > 0)
            {
                this.documentTypeService.Delete(id);
            }

            return Ok();
        }

    }

}