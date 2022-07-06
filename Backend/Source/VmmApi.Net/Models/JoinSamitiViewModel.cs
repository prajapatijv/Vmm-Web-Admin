using System.Collections.Generic;
using VmmApi.Net.DataServices.Entities;

namespace VmmApi.Net.Models
{
    public class JoinSamitiViewModel
    {
        public List<JoinSamiti> Joinsamitis { get; set; }
        public List<SamitiType> Samititypes { get; set; }
    }
}