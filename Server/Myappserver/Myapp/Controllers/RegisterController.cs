using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Internal;
using Myapp.DTO;
using Myapp.Interfaces;

namespace Myapp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegisterController : ControllerBase
    {
        private readonly IRegisterService _registerService;
        
        private static IWebHostEnvironment _webHostEnvironment;

        public RegisterController(IRegisterService registerServices, IWebHostEnvironment env,IWebHostEnvironment webHostEnvironment)
        {
            _registerService = registerServices;
            _webHostEnvironment = webHostEnvironment;
           
        }


        [HttpPost("registerform")]
        public async Task<IActionResult> Register([FromForm] CreateRegisterDTO registerDTO)
        {
            try
            {
                string photoPath = null;

                if (registerDTO.Photo != null && registerDTO.Photo.Length > 0)
                {
                    
                    
                    registerDTO.PhotoPath = $"{Guid.NewGuid().ToString()}.{registerDTO.Photo.FileName.Split('.').Last()}";
                    string path = _webHostEnvironment.WebRootPath + "\\Uploads\\register\\";
                    
                    if (!Directory.Exists(path))
                    {
                        Directory.CreateDirectory(path);
                    }

                    
                    using (FileStream fileStream = System.IO.File.Create($"{path}{registerDTO.PhotoPath}"))
                    {
                        await registerDTO.Photo.CopyToAsync(fileStream);
                        fileStream.Flush();
                    }

                   
                }

                
                var response = await _registerService.RegisterAsync(registerDTO);

                return Ok(response);
            }
            catch (Exception ex)
            {
                return StatusCode((int)System.Net.HttpStatusCode.BadRequest, new MessageDTO<string>()
                {
                    Result = $"Error occurred: {ex.Message}",
                    Status = "E"
                });
            }
        }



    }
}
