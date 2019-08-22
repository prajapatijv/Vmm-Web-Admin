using System.Collections.Generic;
using System.Linq;
using VmmApi.Net.DataServices;
using VmmApi.Net.DataServices.Entities;
using VmmApi.Net.Models;

namespace VmmApi.Net.Services
{
    public interface IQueryService
    {
        QueryViewModel GetAllQueries();
        QueryDetail GetById(int id);
        void Save(QueryDetail queryDetail);
        void Delete(int id);
    }

    public class QueryService : IQueryService
    {
        private readonly VmmDbContext dbContext;

        public QueryService (VmmDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public QueryViewModel GetAllQueries()
        {
            return new QueryViewModel
            {
                Queries = this.dbContext.Queries.ToList()
            };
        }

        public QueryDetail GetById(int id)
        {
            return this.dbContext.Queries.FirstOrDefault(e => e.Id == id);
        }

                
        public void Delete(int id)
        {
            var entity = this.GetById(id);
            if (entity != null)
            {
                this.dbContext.Queries.Remove(entity);
                this.dbContext.SaveChanges();
            }
        }

        public void Save(QueryDetail query)
        {
            this.dbContext.Queries.Add(query);

            if (query.Id > 0)
            {
                this.dbContext.Entry(query).State = System.Data.Entity.EntityState.Modified;
            }

            this.dbContext.SaveChanges();
        }

    }
}