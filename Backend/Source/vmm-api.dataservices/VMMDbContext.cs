using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using VmmApi.DataServices.Entities;

namespace VmmApi.DataServices
{
    public class VMMDbContext : DbContext
    {
        public VMMDbContext(DbContextOptions<VMMDbContext> options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Area> Areas { get; set; }
        public DbSet<DocumentType> DocumentTypes { get; set; }
        public DbSet<EventType> EventTypes { get; set; }

    }
}
