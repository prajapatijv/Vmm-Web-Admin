using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using VmmApi.DataServices.Entities;
using VmmApi.Services;

namespace VmmApi.Controllers
{
    public class DocumentTypeController : VMMControllerBase
    {
        private readonly IDocumentTypeService documentTypeService;

        public DocumentTypeController(IDocumentTypeService documentTypeService)
        {
            this.documentTypeService = documentTypeService;
        }

        [HttpGet]
        public JsonResult Get()
        {
            var documentTypes = this.documentTypeService.GetAllDocumentTypes();
            return Json(documentTypes);
        }
    }
}