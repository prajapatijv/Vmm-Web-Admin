using System.Web.Http;
using Unity;
using Unity.Lifetime;
using VmmApi.Net.Services;

namespace VmmApi.Net.App_Start
{
    public static class DIConfig
    {
        public static void Register(HttpConfiguration config)
        {
            var container = new UnityContainer();
            
            container.RegisterType<IAuthenticateService, JwtTokenAuthenticationService>(new HierarchicalLifetimeManager());
            container.RegisterType<IAreaService, AreaService>(new HierarchicalLifetimeManager());
            container.RegisterType<IDocumentTypeService, DocumentTypeService>(new HierarchicalLifetimeManager());
            container.RegisterType<IEventTypeService, EventTypeService>(new HierarchicalLifetimeManager());
            container.RegisterType<IUserService, UserService>(new HierarchicalLifetimeManager());

            config.DependencyResolver = new UnityResolver(container);
        }
    }
}