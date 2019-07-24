using Microsoft.IdentityModel.Logging;
using Newtonsoft.Json.Serialization;
using System.Web.Http;
using System.Web.Http.Cors;
using VmmApi.Net.Services;

namespace VmmApi.Net
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services
            IdentityModelEventSource.ShowPII = false;

            var configProvider = (IConfigurationProvider)config.DependencyResolver.GetService(typeof(IConfigurationProvider));


            config.EnableCors(new EnableCorsAttribute(configProvider.AppSettings.AllowedCorsDomain, "*", "*"));

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            ConfigureCamelCase(config);
        }

        /// <summary>
        /// Configure all JSON responses to have camel case property names.
        /// </summary>
        private static void ConfigureCamelCase(HttpConfiguration config)
        {
            config.Formatters.Remove(config.Formatters.XmlFormatter);

            var json = GlobalConfiguration.Configuration.Formatters.JsonFormatter;
            json.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();

        }
    }
}
