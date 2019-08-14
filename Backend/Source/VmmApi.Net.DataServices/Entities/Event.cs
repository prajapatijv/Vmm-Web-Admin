using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace VmmApi.Net.DataServices.Entities
{
    [Table("EVENT_DETAIL")]
    public class Event : IntEntity
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("Event_Id")]
        public override int Id { get => base.Id; set => base.Id = value; }

        [Column("Title")]
        public string EventName { get; set; }

        [Column("Description")]
        public string Description { get; set; }

        [Column("Start_Date")]
        public DateTime? StartDate { get; set; }

        [Column("End_Date")]
        public DateTime? EndDate { get; set; }

        [Column("Event_Type_Id")]
        public byte EventTypeId { get; set; }

        [Column("Address1")]
        public string Address1 { get; set; }

        [Column("Address2")]
        public string Address2 { get; set; }

        [Column("City")]
        public string City { get; set; }

        [Column("Contact_no")]
        public string ContactNumber { get; set; }

        [Column("Email_Id")]
        public string ContactEmail { get; set; }

        [Column("is_active")]
        public byte Active { get; set; }

        [Column("Event_Time")]
        public string Time { get; set; }
    }
}
