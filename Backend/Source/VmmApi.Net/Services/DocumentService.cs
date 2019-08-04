using System.Collections.Generic;
using System.Linq;
using VmmApi.Net.DataServices;
using VmmApi.Net.DataServices.Entities;
using VmmApi.Net.Models;

namespace VmmApi.Net.Services
{
    public interface IDocumentService
    {
        DocumentViewModel GetAllDocuments();
    }

    public class DocumentService: IDocumentService
    {
        private readonly IDocumentTypeService documentTypeService;
        private readonly VmmDbContext dbContext;

        public DocumentService(VmmDbContext dbContext, IDocumentTypeService documentTypeService)
        {
            this.dbContext = dbContext;
            this.documentTypeService = documentTypeService;
        }

        public DocumentViewModel GetAllDocuments()
        {
            return new DocumentViewModel
            {
                Documents = this.dbContext.Documents.ToList(),
                DocumentTypes = this.documentTypeService.GetAllDocumentTypes()
            };
        }
    }
}