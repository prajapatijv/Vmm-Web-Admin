using System.ComponentModel.DataAnnotations.Schema;

namespace VmmApi.Net.DataServices.Entities
{
    [Table("Area_Master")]
    public class Area
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("Area_Id")]
        public byte Id { get; set; }

        [Column("Area_Name")]
        public string AreaName { get; set; }
    }
}
