using System;
using System.Collections.Generic;
using System.Linq;
using VmmApi.Net.DataServices;
using VmmApi.Net.DataServices.Entities;
using VmmApi.Net.Models;

namespace VmmApi.Net.Services
{
    public interface IPopupService
    {
        PopupViewModel GetAllPopups();
        Popup GetById(int id);
        void Save(Popup area);
        void Delete(int id);
    }

    public class PopupService : IPopupService
    {
        private readonly VmmDbContext dbContext;

        public PopupService(VmmDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public PopupViewModel GetAllPopups()
        {
            return new PopupViewModel
            {
                Popups = this.dbContext.Popups.ToList()
            };
        }

        public Popup GetById(int id)
        {
            return this.dbContext.Popups.FirstOrDefault(e => e.Id == id);
        }

                
        public void Delete(int id)
        {
            throw new NotSupportedException("This operation is not supported");
            /*var entity = this.GetById(id);
            if (entity != null)
            {
                this.dbContext.Popups.Remove(entity);
                this.dbContext.SaveChanges();
            }*/
        }

        public void Save(Popup popup)
        {
            this.dbContext.Popups.Add(popup);

            if (popup.Id <= 0)
            {
                throw new NotSupportedException("This operation is not supported");
            }

            if (popup.Id > 0)
            {
                this.dbContext.Entry(popup).State = System.Data.Entity.EntityState.Modified;
            }

            this.dbContext.SaveChanges();
        }

    }
}