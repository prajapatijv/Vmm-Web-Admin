using System.ComponentModel.DataAnnotations.Schema;

namespace VmmApi.Net.DataServices.Entities
{
    [Table("DISTRICT")]
    public class District : IntEntity
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("district_id")]
        public override int Id { get => base.Id; set => base.Id = value; }

        [Column("district_name")]
        public string DistrictName { get; set; }

        [Column("state_id")]
        public int StateId { get; set; }

    }
}
