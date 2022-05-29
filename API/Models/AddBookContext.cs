
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;

namespace AddressBook.Models
{
    public class AddBookContext : IdentityDbContext<IdentityUser>
    {
         
        public AddBookContext(DbContextOptions<AddBookContext> options) : base(options)
        { }
        public virtual DbSet<Person> People { get; set; }
        public virtual DbSet<Department> Departments { get; set; }
        public virtual DbSet<Job> Jobs { get; set; }
      //  public virtual DbSet<ApplicationUser> ApplicationUsers { get; set; }


    }
}
