using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace VmmApi.Net.DataServices.Entities
{
    [Table("SAMITI_TYPE_MASTER")]

    public class SamitiType : GuidEntity
    {
        [Column("SamitiTypeId")]
        public override Guid Id { get => base.Id; set => base.Id = value; }

        [Column("Sequence")]
        public int Sequence { get; set; }

        [Column("SamitiName")]
        public string SamitiName { get; set; }

        [Column("Description")]
        public string Description { get; set; }
    }
}
