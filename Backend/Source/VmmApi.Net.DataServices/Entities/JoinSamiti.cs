using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace VmmApi.Net.DataServices.Entities
{
    public class JoinSamiti: IntEntity
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("Id")]
        public override int Id { get => base.Id; set => base.Id = value; }

        [Column("SamitiTypeGuid")]
        public Guid SamitiTypeId { get; set; }

        [Column("Name")]
        public string PersonName { get; set; }

        [Column("ContactNumber")]
        public string ContactNumber { get; set; }

        [Column("EmailId")]
        public string EmailId { get; set; }

        [Column("Village")]
        public string Village { get; set; }

        [Column("Taluka")]
        public string Taluka { get; set; }

        [Column("District")]
        public string District { get; set; }

        [Column("Contacted")]
        public bool? Contacted { get; set; }

        [Column("Comments")]
        public string Comments { get; set; }

        [Column("RequestDate")]
        public DateTime RequestDate { get; set; }
    }
}
