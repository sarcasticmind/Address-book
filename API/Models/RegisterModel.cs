using System.ComponentModel.DataAnnotations;

namespace AddressBook.Models
{
    public class RegisterModel
    {
        [Required]
        public string fName { get; set; }
        [Required]
        public string lName { get; set; }
        [Required]
        [RegularExpression(@"^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$")]
        public string email { get; set; }
        [Required]
        public string password { get; set; }
    }
}
