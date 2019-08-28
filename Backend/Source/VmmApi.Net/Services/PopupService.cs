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
        private readonly IFileService fileService;

        public PopupService(VmmDbContext dbContext,
            IFtpService ftpService,
            IFileService fileService,
            IConfigurationProvider configurationProvider)
        {
            this.dbContext = dbContext;
            this.ftpService = ftpService;
            this.fileService = fileService;
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

            if (!string.IsNullOrEmpty(popup.PosterImage))
            {
                string filePath = Path.Combine(
                            HostingEnvironment.MapPath($"~/{configurationProvider.AppSettings.FileUploadFolder}"),
                            popup.PosterImage.SanotizeFileName());

                var file = new FileInfo(filePath);
                string popupImageName = $"{popup.Title}-{DateTime.Now.ToString("yyyy-MM-dd")}{file.Extension}".SanotizeFileName();

                string uri = $"ftp://{configurationProvider.AppSettings.FTPServer}/httpdocs/Content/Images/PopupImg/{popupImageName}";

                this.ftpService.FtpUpload(uri,
                    configurationProvider.AppSettings.FTPUserName,
                    configurationProvider.AppSettings.FTPPassword, filePath);

                this.fileService.DeleteFile(filePath);

            }

            this.dbContext.Popups.Add(popup);

            if (popup.Id > 0)
            {
                this.dbContext.Entry(popup).State = System.Data.Entity.EntityState.Modified;
            }

            this.dbContext.SaveChanges();
        }

    }
}