using System.Collections.Generic;
using System.Linq;
using VmmApi.Net.DataServices;
using VmmApi.Net.DataServices.Entities;

namespace VmmApi.Net.Services
{

    public interface IDocumentTypeService
    {
        IEnumerable<DocumentType> GetAllDocumentTypes();
    }

    public class DocumentTypeService : IDocumentTypeService
    {
        private readonly VmmDbContext dbContext;

        public DocumentTypeService(VmmDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public IEnumerable<DocumentType> GetAllDocumentTypes()
        {
            return this.dbContext.DocumentTypes.ToList();
        }
    }
}