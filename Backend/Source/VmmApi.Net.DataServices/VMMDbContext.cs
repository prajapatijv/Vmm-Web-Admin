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
        public DbSet<QueryDetail> Queries { get; set; }
        public DbSet<Popup> Popups { get; set; }
        public DbSet<JoinSamiti> JoinSamitiRequests { get; set; }
        public DbSet<SamitiType> SamitiTypes { get; set; }
        public DbSet<State> State { get; set; }
        public DbSet<District> District { get; set; }
        public DbSet<Taluka> Taluka { get; set; }
    }
}