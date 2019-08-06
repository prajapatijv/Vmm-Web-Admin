using System.Collections.Generic;
using VmmApi.Net.DataServices.Entities;

namespace VmmApi.Net.Models
{
    public class EventtTypeViewModel
    {
        public IEnumerable<EventType> EventTypes { get; set; }
    }
}