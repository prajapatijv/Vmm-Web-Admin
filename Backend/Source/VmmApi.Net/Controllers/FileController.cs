using System.IO;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using VmmApi.Net.Extensions;
using VmmApi.Net.Services;

namespace VmmApi.Net.Controllers
{
    [RoutePrefix("api/file")]
    public class FileController : ApiController
    {
        private readonly IConfigurationProvider configurationProvider;
        private readonly IFileCacheService fileCacheService;

        public FileController(
            IConfigurationProvider configurationProvider, 
            IFileCacheService fileCacheService)
        {
            this.configurationProvider = configurationProvider;
            this.fileCacheService = fileCacheService;
        }

        [HttpPost, Route("")]
        public HttpResponseMessage Upload()
        {
            var httpContext = HttpContext.Current;

            string fileName = string.Empty;

            // Check for any uploaded file  
            if (httpContext.Request.Files.Count > 0)
            {
                //Loop through uploaded files  
                HttpPostedFile httpPostedFile = httpContext.Request.Files[0];
                if (httpPostedFile != null)
                {
                    fileName = $"{httpPostedFile.FileName}".SanotizeFileName();

                    byte[] fileData = null;
                    using (var binaryReader = new BinaryReader(httpPostedFile.InputStream))
                    {
                        fileData = binaryReader.ReadBytes((int)httpPostedFile.ContentLength);
                    }

                    this.fileCacheService.AddFile(fileName, fileData);
                }
            }

            // Return status code  
            return Request.CreateResponse(HttpStatusCode.Created, fileName);
        }

        [HttpDelete]
        [Route("")]
        public IHttpActionResult Delete()
        {
            return Ok();
        }
    }
}
