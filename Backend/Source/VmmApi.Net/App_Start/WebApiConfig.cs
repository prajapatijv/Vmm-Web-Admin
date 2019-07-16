﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;
using Microsoft.IdentityModel.Logging;
using Microsoft.IdentityModel.Tokens;
using VmmApi.Net.App_Start;
using VmmApi.Net.Auth;

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

            config.MessageHandlers.Add(new TokenValidationHandler());

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            config.EnableCors(new EnableCorsAttribute("*", "*", "GET,PUT,POST,DELETE"));
        }
    }
}
