using System.Data.Entity;
using VmmApi.Net.DataServices.Entities;

namespace VmmApi.Net.DataServices
{
    public class VmmDbContext : DbContext
    {
        public VmmDbContext() : base("VmmDatabase")
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Area> Areas { get; set; }
        public DbSet<DocumentType> DocumentTypes { get; set; }
        public DbSet<EventType> EventTypes { get; set; }
        public DbSet<Document> Documents { get; set; }
        public DbSet<Event> Events { get; set; }
    }
}