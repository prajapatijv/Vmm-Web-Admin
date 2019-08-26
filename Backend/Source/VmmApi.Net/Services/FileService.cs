using System.IO;

namespace VmmApi.Net.Services
{
    public interface IFileService
    {
        void DeleteFile(string path);
    }

    public class FileService : IFileService
    {
        public void DeleteFile(string path)
        {
            var file = new FileInfo(path);
            file.Delete();
        }
    }
}