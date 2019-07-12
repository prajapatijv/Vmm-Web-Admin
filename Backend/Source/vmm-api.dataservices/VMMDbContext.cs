using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using VmmApi.DataServices.Entities;

namespace VmmApi.DataServices
{
    public class VMMDbContext : DbContext
    {
        private readonly string connectionString;
        public VMMDbContext(string connectionString)
        {
            this.connectionString = connectionString;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(connectionString);
            }
        }

        public DbSet<AreaMaster> AreaMasters { get; set; }
    }
}
