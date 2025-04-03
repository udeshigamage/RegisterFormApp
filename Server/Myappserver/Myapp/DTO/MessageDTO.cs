namespace Myapp.DTO
{
    public class MessageDTO<TEntity>
    {
        public  string Result { get; set; }

        public string Status { get; set; } = "E";
    }
}
