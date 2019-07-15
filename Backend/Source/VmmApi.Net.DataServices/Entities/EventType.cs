using System.ComponentModel.DataAnnotations.Schema;

namespace VmmApi.Net.DataServices.Entities
{
    [Table("Event_Type_Master")]
    public class EventType
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("Event_Type_Id")]
        public int Id { get; set; }

        [Column("Description", TypeName = "nvarchar(100)")]
        public string Description { get; set; }

        [Column("Color_code", TypeName = "varchar(50)")]
        public string ColorCode { get; set; }
    }
}
