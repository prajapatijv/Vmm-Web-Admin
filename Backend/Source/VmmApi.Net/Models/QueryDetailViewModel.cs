using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace VmmApi.Net.Models
{
    public class QueryDetailViewModel
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Email { get; set; }

        public string Contact { get; set; }

        public string Query { get; set; }

        public string Answer { get; set; }

        public DateTime CreatedDate { get; set; }

        public bool Status { get; set; }

        public Int16 Active { get; set; }

        public bool SendReplyEmail { get; set; }
    }
}