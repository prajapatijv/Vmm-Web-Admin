using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web.Hosting;
using VmmApi.Net.DataServices;
using VmmApi.Net.DataServices.Entities;
using VmmApi.Net.Extensions;
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
        private readonly IFtpService ftpService;
        private readonly IConfigurationProvider configurationProvider;

        private readonly VmmDbContext dbContext;

        public DocumentService(VmmDbContext dbContext, 
            IDocumentTypeService documentTypeService, 
            IFtpService ftpService,
            IConfigurationProvider configurationProvider)
        {
            this.dbContext = dbContext;
            this.documentTypeService = documentTypeService;
            this.configurationProvider = configurationProvider;
            this.ftpService = ftpService;
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
            if (!string.IsNullOrEmpty(document.DocumentPath))
            {
                var documentType = this.documentTypeService.GetById(document.DocumentTypeId);

                string documentName = $"{document.Title}-{DateTime.Now.ToString("yyyy-MM-dd")}".SanotizeFileName();
                string uri = $"ftp://{configurationProvider.AppSettings.FTPServer}/httpdocs/Content/Read/{documentType.Description}/{documentName}";
                string filePath = Path.Combine(HostingEnvironment.MapPath("~/Uploaded"), document.DocumentPath.SanotizeFileName());
                this.ftpService.FtpUpload(uri,
                    configurationProvider.AppSettings.FTPUserName,
                    configurationProvider.AppSettings.FTPPassword, filePath);
            }

            this.dbContext.Documents.Add(document);

            if (document.Id > 0)
            {
                this.dbContext.Entry(document).State = System.Data.Entity.EntityState.Modified;
            }

            this.dbContext.SaveChanges();
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

    }
}