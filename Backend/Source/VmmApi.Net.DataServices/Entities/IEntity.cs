namespace VmmApi.Net.DataServices.Entities
{
    public interface IEntity<T>
    {
        T Id { get; set; }
    }

    public abstract class IntEntity : IEntity<int>
    {
        public virtual int Id { get; set; }
    }

    public abstract class ByteEntity : IEntity<byte>
    {
        public virtual byte Id { get; set; }
    }

}
