using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace AddressBook.Models
{
    public class ApplicationUser :IdentityUser
    {
        [Required]
        public string fName { get; set; }
        [Required]
        public string lName { get; set; }

    }
}
