using Microsoft.EntityFrameworkCore;
using Myapp.Dbcontext_;
using Myapp.DTO;
using Myapp.Interfaces;
using Myapp.Models;

namespace Myapp.Services
{
    public class RegisterService:IRegisterService
    {

        private readonly Appdbcontext _context;
        private readonly IWebHostEnvironment _env;

        public RegisterService(Appdbcontext context, IWebHostEnvironment env)
        {
            _context = context;
            _env = env;
        }
        public async Task<MessageDTO<string>> RegisterAsync(CreateRegisterDTO registerDTO)
        {
            try
            {
                
                var register = new Register
                {
                    Firstname = registerDTO.Firstname,
                    Lastname = registerDTO.Lastname,
                    DateOfBirth = registerDTO.DateOfBirth,
                    Email = registerDTO.Email,
                    GithubUrl = registerDTO.GithubUrl,
                    ContactNo = registerDTO.ContactNo,
                    Gender = registerDTO.Gender,
                    PhotoPath = registerDTO.PhotoPath, 
                    About = registerDTO.About,
                    Language =  registerDTO.Language 
                };

                
                await _context.Registers.AddAsync(register);
                await _context.SaveChangesAsync();

                return new MessageDTO<string>
                {
                    Result = "Registration successful.",
                    Status = "S"
                };
            }
            catch (Exception ex)
            {
                
                return new MessageDTO<string>
                {
                    Result = $"An error occurred: {ex.Message}",
                    Status = "E"
                };
            }
        }



    }
}
