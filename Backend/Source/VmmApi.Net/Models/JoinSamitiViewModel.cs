using System.Collections.Generic;
using VmmApi.Net.DataServices.Entities;

namespace VmmApi.Net.Models
{
    public class JoinSamitiViewModel
    {
        public List<JoinSamiti> JoinSamitis { get; set; }
        public List<SamitiType> SamitiTypes { get; set; }
    }
}