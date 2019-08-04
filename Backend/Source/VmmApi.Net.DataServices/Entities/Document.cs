using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VmmApi.Net.DataServices.Entities
{

    [Table("DOCUMENT_MASTER")]
    public class Document
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("Document_Id")]
        public int Id { get; set; }

        [Column("Title")]
        public string Title { get; set; }

        [Column("Description")]
        public string Description { get; set; }

        [Column("Publish_Date")]
        public DateTime PublishDate { get; set; }

        [Column("Expiry_Date")]
        public DateTime ExpiryDate { get; set; }

        [Column("Document_Path")]
        public string DocumentPath { get; set; }

        [Column("Document_Type_Id")]
        public byte DocumentTypeId { get; set; }

        [Column("Is_Active")]
        public byte Active { get; set; }

        [Column("Creation_Date")]
        public DateTime? CreationDate { get; set; }

        [Column("GroupYear")]
        public int? GroupYear { get; set; }

    }
}
