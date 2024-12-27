using Microsoft.EntityFrameworkCore;
using sinapsis.Model;
using System.Collections.Generic;
using System.Reflection.Emit;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<Mensaje> Mensajes { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // Configuración adicional de las tablas (opcional)
        modelBuilder.Entity<Mensaje>().ToTable("Mensajes");
    }
}