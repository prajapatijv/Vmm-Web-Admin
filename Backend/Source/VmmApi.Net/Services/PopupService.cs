using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web.Hosting;
using VmmApi.Net.DataServices;
using VmmApi.Net.DataServices.Entities;
using VmmApi.Net.Models;
using VmmApi.Net.Extensions;


namespace VmmApi.Net.Services
{
    public interface IPopupService
    {
        PopupViewModel GetAllPopups();
        Popup GetById(int id);
        void Save(Popup area);
        void Delete(int id);
    }

    public class PopupService : IPopupService
    {
        private readonly VmmDbContext dbContext;
        private readonly IConfigurationProvider configurationProvider;
        private readonly IFtpService ftpService;
        private readonly IFileCacheService fileCacheService;

        public PopupService(VmmDbContext dbContext,
            IFtpService ftpService,
            IFileCacheService fileCacheService,
            IConfigurationProvider configurationProvider)
        {
            this.dbContext = dbContext;
            this.ftpService = ftpService;
            this.fileCacheService = fileCacheService;
            this.configurationProvider = configurationProvider;
        }

        public PopupViewModel GetAllPopups()
        {
            return new PopupViewModel
            {
                Popups = this.dbContext.Popups.ToList()
            };
        }

        public Popup GetById(int id)
        {
            return this.dbContext.Popups.FirstOrDefault(e => e.Id == id);
        }

                
        public void Delete(int id)
        {
            throw new NotSupportedException("This operation is not supported");
            /*var entity = this.GetById(id);
            if (entity != null)
            {
                this.dbContext.Popups.Remove(entity);
                this.dbContext.SaveChanges();
            }*/
        }

        public void Save(Popup popup)
        {
            if (popup.Id <= 0)
            {
                throw new NotSupportedException("This operation is not supported");
            }

            this.Upload(popup.PosterImage, popup.Title, "Content/Images/PopupImg");
            this.Upload(popup.DocumentLink, popup.Title, "Content/Images/PopupImg");

            this.dbContext.Popups.Add(popup);

            if (popup.Id > 0)
            {
                this.dbContext.Entry(popup).State = System.Data.Entity.EntityState.Modified;
            }

            this.dbContext.SaveChanges();
        }

        private void Upload(string docmentPath, string title, string uploadTo)
        {
            if (!string.IsNullOrEmpty(docmentPath))
            {
                var key = docmentPath.SanotizeFileName();
                var fileBytes = this.fileCacheService.GetFile(key);
                if (fileBytes != null)
                {
                    var extension = new FileInfo(key).Extension;

                    string documentToUpload = $"{title}-{DateTime.Now.ToString("yyyy-MM-dd")}{extension}".SanotizeFileName();

                    string uri = $"${configurationProvider.FtpSettings.FTPRootPath}/{uploadTo}/{documentToUpload}";

                    this.ftpService.FtpUpload(uri,
                        configurationProvider.FtpSettings.FTPUserName,
                        configurationProvider.FtpSettings.FTPPassword, fileBytes);

                    this.fileCacheService.RemoveFile(key);
                }
            }
        }

    }
}