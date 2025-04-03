using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Myapp.Models
{
    [Table("Tb_Register")]
    public class Register
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        public string Firstname { get; set; }

        [Required]
        public string Lastname { get; set; }

        [Required, DataType(DataType.Date)]
        public DateTime DateOfBirth { get; set; }

        [Required, EmailAddress]
        public string Email { get; set; }

        [Url]
        public string GithubUrl { get; set; }

        [Required, Phone]
        public string ContactNo { get; set; }

       

        public string? PhotoPath { get; set; }

        public List<string>? Language { get; set; }

        [Required]
        public string Gender { get; set; }

        public string? About { get; set; }
    }
}
