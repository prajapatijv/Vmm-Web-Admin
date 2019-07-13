using System.ComponentModel.DataAnnotations.Schema;

namespace VmmApi.DataServices.Entities
{
    [Table("Admin")]
    public class User
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("AdminId")]
        public int Id { get; set; }

        [Column("UserName", TypeName = "nvarchar(50)")]
        public string UserName { get; set; }

        [Column("Passwrod", TypeName = "nvarchar(40)")]
        public string Passwrod { get; set; }

        [Column("Email", TypeName = "nvarchar(350)")]
        public string Email { get; set; }
    }
}
