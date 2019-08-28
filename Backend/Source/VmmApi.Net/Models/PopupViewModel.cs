using System.Collections.Generic;
using VmmApi.Net.DataServices.Entities;

namespace VmmApi.Net.Models
{

    public class PopupViewModel
    {
        public IEnumerable<Popup> Popups { get; set; }
    }
}