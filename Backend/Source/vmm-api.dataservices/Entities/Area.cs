using System.ComponentModel.DataAnnotations.Schema;

namespace VmmApi.DataServices.Entities
{
    [Table("Area_Master")]
    public class Area
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("Area_Id")]
        public byte Id { get; set; }

        [Column("Area_Name", TypeName = "nvarchar(100)")]
        public string AreaName { get; set; }
    }
}
