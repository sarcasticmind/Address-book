using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace AddressBook.Models
{
    public class Job
    {
        public int id { get; set; }
        [Required]
        public string name { get; set; }
        public virtual List<Person> People { get; set; }
    }
}
