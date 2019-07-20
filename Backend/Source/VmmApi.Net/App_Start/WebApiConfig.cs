using Microsoft.IdentityModel.Logging;
using System.Web.Http;
using System.Web.Http.Cors;
using VmmApi.Net.Core;

namespace VmmApi.Net
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services
            IdentityModelEventSource.ShowPII = false;

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

        }
    }
}
