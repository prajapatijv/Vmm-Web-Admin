using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using VmmApi.Net.DataServices.Entities;

namespace VmmApi.Net.Models
{
    public class DocumentViewModel
    {
        public IEnumerable<Document> Documents { get; set; }

        public IEnumerable<DocumentType> DocumentTypes { get; set; }
    }
}