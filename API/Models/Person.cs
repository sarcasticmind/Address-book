using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AddressBook.Models
{
    public class Person
    {
        public int id { get; set; }
        [Required]
        [MinLength(3)]
        public string fName { get; set; }
        [Required]
        [MinLength(3)]
        public string lName { get; set; }
        [Required]
        [RegularExpression(@"^01[0|1|2|5]{1}[0-9]{8}$")]
        public string mobile { get; set; }
        [Required]
        public DateTime birthDate { get; set; }
        [Required]
        public string Address { get; set; }
        [Required]
        [RegularExpression(@"^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$")]
        public string email { get; set; }
        public string photo { get; set; }
        public int age { get; set; }

        [ForeignKey("Department")]
        public int dept_id { get; set; }
        public virtual Department Department { get; set; }

        [ForeignKey("Job")]
        public int job_id { get; set; }
        public virtual Job Job { get; set; }

    }
}
