using System.IO;

namespace VmmApi.Net.Services
{
    public interface IFileCacheService
    {
        string AddFile(string fileName, byte[] fileBytes);
        byte[] GetFile(string fileName);
        void RemoveFile(string fileName);
    }

    public class FileCacheService : IFileCacheService
    {
        private readonly FileCacheProvder container;
        private readonly IConfigurationProvider configurationProvider;

        public FileCacheService(FileCacheProvder container, IConfigurationProvider configurationProvider)
        {
            this.container = container;
            this.configurationProvider = configurationProvider;
        }

        public string AddFile(string fileName, byte[] fileBytes)
        {
            if (this.container.Add(fileName, fileBytes, 
                System.DateTimeOffset.UtcNow.AddMinutes(configurationProvider.AppSettings.FileCacheTimeoutInMinutes)))
            {
                return fileName;
            }

            return null;
        }

        public byte[] GetFile(string fileName)
        {
            return this.container.Get(fileName);
        }

        public void RemoveFile(string fileName)
        {
            this.container.Remove(fileName);
        }
    }
}