using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
using VmmApi.Net.Core;

namespace VmmApi.Net.Controllers
{
    [Authorize]
    [HandleExceptionFilter]
    public abstract class BaseController: ApiController
    {
    }
}