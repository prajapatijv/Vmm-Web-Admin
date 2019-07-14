using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace VmmApi.Controllers
{
    [Authorize]
    [ApiController]
    public abstract class VMMControllerBase : Controller
    {
    }
}
