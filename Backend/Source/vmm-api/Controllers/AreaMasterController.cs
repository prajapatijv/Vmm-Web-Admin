using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace VmmApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AreaMasterController : Controller
    {
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            //var context = new VMMDbContext()
            return null;
        }
    }
}