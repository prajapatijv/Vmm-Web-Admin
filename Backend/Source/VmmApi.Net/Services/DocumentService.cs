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
        private readonly IFileCacheService fileCacheService;
        private readonly IConfigurationProvider configurationProvider;
        private readonly VmmDbContext dbContext;

        public DocumentService(VmmDbContext dbContext, 
            IDocumentTypeService documentTypeService, 
            IFtpService ftpService,
            IFileCacheService fileCacheService,
            IConfigurationProvider configurationProvider)
        {
            this.dbContext = dbContext;
            this.documentTypeService = documentTypeService;
            this.configurationProvider = configurationProvider;
            this.ftpService = ftpService;
            this.fileCacheService = fileCacheService;
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
                var key = document.DocumentPath.SanotizeFileName();
                var fileBytes = this.fileCacheService.GetFile(key);
                if (fileBytes != null)
                {

                    var extension = new FileInfo(key).Extension;
                    var documentType = this.documentTypeService.GetById(document.DocumentTypeId);


                    string documentName = $"{document.Title}{extension}".SanotizeFileName();
                    string uri = $"{configurationProvider.FtpSettings.FTPRootPath}/Content/Read/{documentType.Description.SanotizeFileName()}/{documentName}";

                    this.ftpService.FtpUpload(uri,
                        configurationProvider.FtpSettings.FTPUserName,
                        configurationProvider.FtpSettings.FTPPassword, fileBytes);

                    this.fileCacheService.RemoveFile(key);

                    document.DocumentPath = documentName;
                }
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