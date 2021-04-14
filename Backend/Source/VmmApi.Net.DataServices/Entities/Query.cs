using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VmmApi.Net.DataServices.Entities
{
    [Table("Query_Detail")]
    public class QueryDetail : IntEntity
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("Query_Id")]
        public override int Id { get => base.Id; set => base.Id = value; }

        [Column("Name")]
        public string Name { get; set; }

        [Column("EmailId")]
        public string Email { get; set; }

        [Column("Contact")]
        public string Contact { get; set; }

        [Column("QueryText")]
        public string Query { get; set; }

        [Column("QueryAnswer")]
        public string Answer { get; set; }

        [Column("Creation_Date")]
        public DateTime CreatedDate { get; set; }

        [Column("Status")]
        public bool Status { get; set; }

        [Column("IsActive")]
        public Int16 Active { get; set; }

    }
}
