using System.Web.Http;
using VmmApi.Net.DataServices.Entities;
using VmmApi.Net.Models;
using VmmApi.Net.Services;

namespace VmmApi.Net.Controllers
{
    [RoutePrefix("api/popups")]
    public class PopupController : BaseController
    {
        private readonly IPopupService popupService;

        public PopupController(IPopupService popupService)
        {
            this.popupService = popupService;
        }

        [HttpGet]
        [Route("")]
        public IHttpActionResult Get()
        {
            var popups = this.popupService.GetAllPopups();
            return Ok(popups);
        }

        [HttpPost]
        [Route("")]
        public IHttpActionResult Post(Popup popup)
        {
            if (popup.Id <= 0)
            {
                return BadRequest();
            }

            this.popupService.Save(popup);
            return Get();
        }

        [HttpDelete]
        [Route("{id}")]
        public IHttpActionResult Delete(int id)
        {
            return BadRequest();
        }
    }
}