using System.ComponentModel.DataAnnotations.Schema;

namespace VmmApi.Net.DataServices.Entities
{
    [Table("Document_Type_Master")]
    public class DocumentType : ByteEntity
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("Document_Type_Id")]
        public override byte Id { get => base.Id; set => base.Id = value; }

        [Column("Description")]
        public string Description { get; set; }
    }
}
