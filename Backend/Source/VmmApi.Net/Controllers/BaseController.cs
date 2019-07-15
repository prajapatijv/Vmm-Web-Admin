using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace VmmApi.Net.Controllers
{
    [Authorize]
    public abstract class BaseController: ApiController
    {
    }
}