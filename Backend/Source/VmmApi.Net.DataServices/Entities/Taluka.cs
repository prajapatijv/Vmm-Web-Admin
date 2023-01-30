using System.ComponentModel.DataAnnotations.Schema;

namespace VmmApi.Net.DataServices.Entities
{
    [Table("TALUKA")]
    public class Taluka : IntEntity
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("taluka_id")]
        public override int Id { get => base.Id; set => base.Id = value; }

        [Column("taluka_name")]
        public string TalukaName { get; set; }

        [Column("district_id")]
        public int DistrictId { get; set; }

    }
}
