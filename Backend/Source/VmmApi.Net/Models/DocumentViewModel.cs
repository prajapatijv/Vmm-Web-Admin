using System.Collections.Generic;
using VmmApi.Net.DataServices.Entities;

namespace VmmApi.Net.Models
{
    public class DocumentViewModel
    {
        public IEnumerable<Document> Documents { get; set; }

        public IEnumerable<DocumentType> Documenttypes { get; set; }
    }
}