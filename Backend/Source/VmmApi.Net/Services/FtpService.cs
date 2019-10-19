using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace VmmApi.Net.Services
{
    public interface IFtpService
    {
        void FtpUpload(string uri, string userName, string password, string filePath);
        void FtpUpload(string uri, string userName, string password, byte[] fileBytes);
    }

    public class FtpService : IFtpService
    {
        public void FtpUpload(string uri, string userName, string password, string filePath)
        {
            try
            {
                using (WebClient webClient = new WebClient())
                {
                    webClient.Credentials = new NetworkCredential(userName, password);
                    webClient.UploadFile(uri, WebRequestMethods.Ftp.UploadFile, filePath);
                }
            }
            catch (Exception)
            {
                throw;
            }
        }

        public void FtpUpload(string uri, string userName, string password, byte[] fileBytes)
        {
            {
                try
                {
                    using (WebClient webClient = new WebClient())
                    {
                        webClient.Credentials = new NetworkCredential(userName, password);
                        webClient.UploadData(uri, WebRequestMethods.Ftp.UploadFile, fileBytes);
                    }
                }
                catch (Exception ex)
                {
                    throw;
                }
            }
        }
    }
}