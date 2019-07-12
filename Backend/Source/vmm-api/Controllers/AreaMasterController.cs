using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using VmmApi.DataServices.Entities;
using VmmApi.Services;

namespace VmmApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AreaMasterController : Controller
    {
        private readonly IAreaMasterService areaMasterService;

        public AreaMasterController(IAreaMasterService areaMasterService)
        {
            this.areaMasterService = areaMasterService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<AreaMaster>> Get()
        {
            var items = this.areaMasterService.GetAllAreas();
            return Ok(items);
        }
    }
}