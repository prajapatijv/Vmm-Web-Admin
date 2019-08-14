using System.ComponentModel.DataAnnotations.Schema;

namespace VmmApi.Net.DataServices.Entities
{
    [Table("Area_Master")]
    public class Area : ByteEntity
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("Area_Id")]
        public override byte Id { get => base.Id; set => base.Id = value; }

        [Column("Area_Name")]
        public string AreaName { get; set; }
    }
}
