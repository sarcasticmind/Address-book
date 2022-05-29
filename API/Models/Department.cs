using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace AddressBook.Models
{
    public class Department
    {
        public int id { get; set; }
        [Required]
        [MinLength(3)]
        public string name { get; set; }
        [Required]
        [MinLength(3)]
        public string location { get; set; }

        public virtual List<Person> People { get; set; }
    }
}
