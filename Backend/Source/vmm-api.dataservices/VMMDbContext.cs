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

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
        }

        public DbSet<AreaMaster> AreaMasters { get; set; }
    }
}
