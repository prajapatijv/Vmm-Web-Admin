using System.Collections.Generic;
using VmmApi.Net.DataServices.Entities;

namespace VmmApi.Net.Models
{
    public class StateViewModel
    {
        public IEnumerable<State> States { get; set; }
    }

    public class DistrictViewModel
    {
        public IEnumerable<District> Districts { get; set; }
    }

    public class TalukaViewModel
    {
        public IEnumerable<Taluka> Taluka { get; set; }
    }
}