using System.Collections.Generic;
using VmmApi.Net.DataServices.Entities;

namespace VmmApi.Net.Models
{
    public class EventViewModel
    {
        public IEnumerable<Event> Events { get; set; }

        public IEnumerable<EventType> Eventtypes { get; set; }

        public IEnumerable<Area> Areas { get; set; }

    }
}