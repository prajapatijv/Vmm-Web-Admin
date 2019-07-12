using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VmmApi.DataServices;
using VmmApi.DataServices.Entities;

namespace VmmApi.Services
{
    public interface IDocumentTypeService
    {
        IEnumerable<DocumentType> GetAllDocumentTypes();
    }

    public class DocumentTypeService : IDocumentTypeService
    {
        private readonly VMMDbContext dbContext;

        public DocumentTypeService(VMMDbContext dbContext)
        {
            this.dbContext = dbContext; 
        }

        public IEnumerable<DocumentType> GetAllDocumentTypes()
        {
            return this.dbContext.DocumentTypes.ToList();
        }
    }
}
