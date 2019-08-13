using System.ComponentModel.DataAnnotations.Schema;

namespace VmmApi.Net.DataServices.Entities
{
    [Table("Event_Type_Master")]
    public class EventType: ByteEntity
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("Event_Type_Id")]
        public override byte Id { get => base.Id; set => base.Id = value; }

        [Column("Description")]
        public string Description { get; set; }

        [Column("Color_code")]
        public string ColorCode { get; set; }
    }
}
