using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using VmmApi.Net.DataServices.Entities;

namespace VmmApi.Net.DataServices.Repository
{
    public class BaseRepository<T> where T : IEntity<T> 
    {
        private readonly DbContext dbContext;
        public BaseRepository(DbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public T GetById(int id)
        {
            throw new NotImplementedException();
        }

        IEnumerable<T> GetAll()
        {
            throw new NotImplementedException();
        }

        void Save(T entity)
        {
            throw new NotImplementedException();
        }

        void Delete(T entity)
        {
            throw new NotImplementedException();
        }
    }
}
