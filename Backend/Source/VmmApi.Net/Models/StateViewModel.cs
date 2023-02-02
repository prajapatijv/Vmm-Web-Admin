using System.Collections.Generic;
using System.Linq;
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
        public IEnumerable<State> States { get; set; }
    }

    public class TalukaViewModel
    {
        public IEnumerable<TalukaModel> Talukas { get; set; }
        public IEnumerable<State> States { get; set; }
        public IEnumerable<District> Districts { get; set; }
    }

    public class TalukaModel: Taluka
    {
        public TalukaModel()
        {

        }

        public TalukaModel(Taluka taluka, IList<District> districts)
        {
            Id = taluka.Id;
            TalukaName = taluka.TalukaName;
            DistrictId = taluka.DistrictId;
            StateId = districts.FirstOrDefault(_ => _.Id == this.DistrictId)?.StateId ?? 0;
        }

        public int StateId { get; set; }
    }
}