using System.Collections.Generic;
using VmmApi.Net.DataServices.Entities;

namespace VmmApi.Net.Models
{

    public class QueryViewModel
    {
        public IEnumerable<QueryDetail> Queries { get; set; }
    }
}