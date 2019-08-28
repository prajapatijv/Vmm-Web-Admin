using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace VmmApi.Net.DataServices.Entities
{
    [Table("Popup")]
    public class Popup : ByteEntity
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("Id")]
        public override byte Id { get => base.Id; set => base.Id = value; }

        [Column("Title")]
        public string Title { get; set; }

        [Column("ShortName")]
        public string ShortName { get; set; }

        [Column("PosterImage")]
        public string PosterImage { get; set; }

        [Column("DocumentPath")]
        public string DocumentLink { get; set; }

        [Column("PublishDate")]
        public DateTime PublishDate { get; set; }

        [Column("ExpiryDate")]
        public DateTime ExpiryDate { get; set; }

        [Column("Enabled")]
        public bool Enabled { get; set; }

        [Column("PopupWidth")]
        public byte PopupWidth { get; set; }
    }
}
