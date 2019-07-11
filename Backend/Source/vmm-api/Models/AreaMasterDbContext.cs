using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;

namespace vmm_api.Models
{
    [Table("Area_Master")]
    public class AreaMaster
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("Area_Id")]
        public int Id { get; set; }

        [Column("Area_Name", TypeName = "nvarchar(100)")]
        public string AreaName { get; set; }
    }

    public class AreaMasterContext : DbContext
    {
        public AreaMasterContext(DbContextOptions<AreaMasterContext> options) : base(options)
        {
        }

        public DbSet<AreaMaster> AreaMasters { get; set; }
    }
}
