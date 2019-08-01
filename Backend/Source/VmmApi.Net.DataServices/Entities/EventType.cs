using System.ComponentModel.DataAnnotations.Schema;

namespace VmmApi.Net.DataServices.Entities
{
    [Table("Event_Type_Master")]
    public class EventType
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("Event_Type_Id")]
        public byte Id { get; set; }

        [Column("Description")]
        public string Description { get; set; }

        [Column("Color_code")]
        public string ColorCode { get; set; }
    }
}
