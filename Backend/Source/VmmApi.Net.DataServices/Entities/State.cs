using System.ComponentModel.DataAnnotations.Schema;

namespace VmmApi.Net.DataServices.Entities
{
    [Table("STATE")]
    public class State : IntEntity
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("state_id")]
        public override int Id { get => base.Id; set => base.Id = value; }

        [Column("state_name")]
        public string StateName { get; set; }
    }
}
