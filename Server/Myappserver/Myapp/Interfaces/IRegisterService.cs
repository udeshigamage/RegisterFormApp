using Myapp.DTO;

namespace Myapp.Interfaces
{
    public interface IRegisterService
    {
        Task<MessageDTO<string>> RegisterAsync(CreateRegisterDTO registerDTO);
    }
}
