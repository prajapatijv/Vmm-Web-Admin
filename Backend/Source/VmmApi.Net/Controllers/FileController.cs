using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Hosting;
using System.Web.Http;

namespace VmmApi.Net.Controllers
{
    [RoutePrefix("api/file")]
    public class FileController : ApiController
    {
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
                    fileName = $"{Guid.NewGuid().ToString()}_{httpPostedFile.FileName}";
                    // Construct file save path  
                    var fileSavePath = Path.Combine(HostingEnvironment.MapPath("~/Uploaded"), fileName);

                    // Save the uploaded file  
                    httpPostedFile.SaveAs(fileSavePath);
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
