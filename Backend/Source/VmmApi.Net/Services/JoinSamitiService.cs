using System.Linq;
using VmmApi.Net.DataServices;
using VmmApi.Net.Models;

namespace VmmApi.Net.Services
{
    public interface IJoinSamitiService
    {
        JoinSamitiViewModel GetAll();
    }

    public class JoinSamitiService : IJoinSamitiService
    {
        private readonly VmmDbContext dbContext;

        public JoinSamitiService(VmmDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public JoinSamitiViewModel GetAll()
        {
            var items = this.dbContext.JoinSamitiRequests.OrderByDescending(o => o.RequestDate).ToList();
            var samitiTypes = this.dbContext.SamitiTypes.ToList();

            return new JoinSamitiViewModel
            {
                JoinSamitis = items,
                SamitiTypes = samitiTypes
            };
        }
    }

}