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

        [Column("Password", TypeName = "nvarchar(40)")]
        public string Password { get; set; }

        public string FirstName { get; set; }
        public string LastName { get; set; }

    }
}
