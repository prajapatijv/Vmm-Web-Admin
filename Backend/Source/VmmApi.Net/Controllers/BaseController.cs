using System.Web.Http;
using VmmApi.Net.Core;
using VmmApi.Net.Jwt;

namespace VmmApi.Net.Controllers
{
    //[JwtAuthentication, JwtClaimsAuthorization("isAdmin", "true", "True")]
    [JwtAuthentication]
    [HandleExceptionFilter]
    public abstract class BaseController: ApiController
    {
    }
}