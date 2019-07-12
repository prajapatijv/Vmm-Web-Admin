using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace VmmApi.DataServices.Entities
{
    [Table("Document_Type_Master")]
    public class DocumentType
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("Document_Type_Id")]
        public byte Id { get; set; }

        [Column("Description", TypeName = "nvarchar(100)")]
        public string Description { get; set; }
    }
}
