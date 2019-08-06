using System.Collections.Generic;
using VmmApi.Net.DataServices.Entities;

namespace VmmApi.Net.Models
{
    public class DocumentTypeViewModel
    {
        public IEnumerable<DocumentType> Documenttypes { get; set; }
    }
}