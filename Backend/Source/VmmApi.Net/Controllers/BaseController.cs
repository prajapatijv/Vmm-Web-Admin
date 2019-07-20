using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
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