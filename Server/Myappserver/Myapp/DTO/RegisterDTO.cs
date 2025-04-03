

namespace Myapp.DTO
{
    public class CreateRegisterDTO
    {
       

       
        public string Firstname { get; set; }

        
        public string Lastname { get; set; }

        
        public DateTime DateOfBirth { get; set; }

        
        public string Email { get; set; }

        
        public string GithubUrl { get; set; }

        
        public string ContactNo { get; set; }

       
        public IFormFile? Photo { get; set; }

        public string? PhotoPath { get; set; }

        public List<string>? Language { get; set; }

       
        public string Gender { get; set; }

        public string? About { get; set; }
    }
}
