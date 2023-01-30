using System.Collections.Generic;
using System.Linq;
using VmmApi.Net.DataServices;
using VmmApi.Net.DataServices.Entities;
using VmmApi.Net.Models;

namespace VmmApi.Net.Services
{
    public interface IStateService
    {
        StateViewModel GetAllStates();
        State GetById(int id);
        void Save(State state);
        void Delete(int id);
    }

    public class StateService : IStateService
    {
        private readonly VmmDbContext dbContext;

        public StateService(VmmDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public StateViewModel GetAllStates()
        {
            return new StateViewModel
            {
                States = this.dbContext.State.ToList()
            };
        }

        public State GetById(int id)
        {
            return this.dbContext.State.FirstOrDefault(e => e.Id == id);
        }

                
        public void Delete(int id)
        {
            var entity = this.GetById(id);
            if (entity != null)
            {
                this.dbContext.State.Remove(entity);
                this.dbContext.SaveChanges();
            }
        }

        public void Save(State state)
        {
            this.dbContext.State.Add(state);

            if (state.Id > 0)
            {
                this.dbContext.Entry(state).State = System.Data.Entity.EntityState.Modified;
            }

            this.dbContext.SaveChanges();
        }

    }
}