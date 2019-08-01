using System.Collections.Generic;
using System.Linq;
using VmmApi.Net.DataServices;
using VmmApi.Net.DataServices.Entities;

namespace VmmApi.Net.Services
{
    public interface IDocumentService
    {
        IEnumerable<Document> GetAllDocuments();
    }

    public class DocumentService: IDocumentService
    {
        private readonly VmmDbContext dbContext;

        public DocumentService(VmmDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public IEnumerable<Document> GetAllDocuments()
        {
            return this.dbContext.Documents.ToList();
        }
    }
}