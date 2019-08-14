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
        DocumentType GetById(int id);
        void Save(DocumentType documentType);
        void Delete(int id);
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
                Documenttypes = this.dbContext.DocumentTypes.ToList()
            };
        }

        public DocumentType GetById(int id)
        {
            return this.dbContext.DocumentTypes.FirstOrDefault(e => e.Id == id);
        }

                
        public void Delete(int id)
        {
            var entity = this.GetById(id);
            if (entity != null)
            {
                this.dbContext.DocumentTypes.Remove(entity);
                this.dbContext.SaveChanges();
            }
        }

        public void Save(DocumentType documentType)
        {
            this.dbContext.DocumentTypes.Add(documentType);

            if (documentType.Id > 0)
            {
                this.dbContext.Entry(documentType).State = System.Data.Entity.EntityState.Modified;
            }

            this.dbContext.SaveChanges();
        }
    }
}