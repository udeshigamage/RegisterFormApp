using Microsoft.EntityFrameworkCore;
using Myapp.Models;


namespace Myapp.Dbcontext_
{
    public class Appdbcontext:DbContext
    {
        public Appdbcontext(DbContextOptions<Appdbcontext> options) : base(options)
        {
        }

        public DbSet<Register> Registers { get; set; }
    }
    
}
