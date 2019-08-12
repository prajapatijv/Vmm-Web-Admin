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
        Document GetById(int id);
        void Save(Document document);
        void Delete(int id);

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

        public void Delete(int id)
        {
            var entity = this.GetById(id);
            if (entity != null)
            {
                this.dbContext.Documents.Remove(entity);
                this.dbContext.SaveChanges();
            }
        }

        public DocumentViewModel GetAllDocuments()
        {
            return new DocumentViewModel
            {
                Documents = this.dbContext.Documents.ToList(),
                Documenttypes = this.documentTypeService.GetAllDocumentTypes().Documenttypes
            };
        }

        public Document GetById(int id)
        {
            return this.dbContext.Documents.FirstOrDefault(e => e.Id == id);
        }

        public void Save(Document document)
        {
            this.dbContext.Documents.Add(document);

            if (document.Id > 0)
            {
                this.dbContext.Entry(document).State = System.Data.Entity.EntityState.Modified;
            }

            this.dbContext.SaveChanges();
        }
    }
}