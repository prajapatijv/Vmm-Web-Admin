using System.Collections.Generic;
using System.Linq;
using VmmApi.Net.DataServices;
using VmmApi.Net.DataServices.Entities;
using VmmApi.Net.Models;

namespace VmmApi.Net.Services
{

    public interface IDocumentTypeService
    {
        DocumentTypeViewModel GetAllDocumentTypes();
    }

    public class DocumentTypeService : IDocumentTypeService
    {
        private readonly VmmDbContext dbContext;

        public DocumentTypeService(VmmDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public DocumentTypeViewModel GetAllDocumentTypes()
        {
            return new DocumentTypeViewModel
            {
                DocumentTypes = this.dbContext.DocumentTypes.ToList()
            };
        }
    }
}