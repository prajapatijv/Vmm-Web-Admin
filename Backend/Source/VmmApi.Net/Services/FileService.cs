using System.IO;

namespace VmmApi.Net.Services
{
    public interface IFileService
    {
        string AddFile(string fileName, byte[] fileBytes);
        byte[] GetFile(string fileName);
        void RemoveFile(string fileName);
        void DeleteFile(string path);
    }

    public class FileService : IFileService
    {
        private readonly FileCacheProvder container;

        public FileService(FileCacheProvder container)
        {
            this.container = container;
        }

        public string AddFile(string fileName, byte[] fileBytes)
        {
            if (this.container.Add(fileName, fileBytes, System.DateTimeOffset.UtcNow.AddMinutes(10)))
            {
                return fileName;
            }

            return null;
        }

        public void DeleteFile(string path)
        {
            var file = new FileInfo(path);
            file.Delete();
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