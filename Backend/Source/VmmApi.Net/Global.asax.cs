using NLog;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Routing;

namespace VmmApi.Net
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        NLog.ILogger logger = LogManager.GetCurrentClassLogger();

        protected void Application_Start()
        {
            logger.Info("Application_Start");
            GlobalConfiguration.Configure(WebApiConfig.Register);
        }

        protected void Application_Error(object sender, EventArgs e)
        {
            logger.Error(Server.GetLastError(), "Application_Error");
        }
    }
}
