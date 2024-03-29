using System.Runtime.CompilerServices;
using NLog.Fluent;

[assembly: WebActivatorEx.PreApplicationStartMethod(typeof(VmmApi.Net.App_Start.NinjectWebCommon), "Start")]
[assembly: WebActivatorEx.ApplicationShutdownMethodAttribute(typeof(VmmApi.Net.App_Start.NinjectWebCommon), "Stop")]

namespace VmmApi.Net.App_Start
{
    using System;
    using System.Web;

    using Microsoft.Web.Infrastructure.DynamicModuleHelper;

    using Ninject;
    using Ninject.Web.Common;
    using Ninject.Web.Common.WebHost;
    using NLog;
    using VmmApi.Net.Core;
    using VmmApi.Net.Jwt;
    using VmmApi.Net.Services;

    public static class NinjectWebCommon 
    {
        private static readonly Bootstrapper bootstrapper = new Bootstrapper();

        /// <summary>
        /// Starts the application
        /// </summary>
        public static void Start() 
        {
            DynamicModuleUtility.RegisterModule(typeof(OnePerRequestHttpModule));
            DynamicModuleUtility.RegisterModule(typeof(NinjectHttpModule));
            bootstrapper.Initialize(CreateKernel);
        }
        
        /// <summary>
        /// Stops the application.
        /// </summary>
        public static void Stop()
        {
            bootstrapper.ShutDown();
        }
        
        /// <summary>
        /// Creates the kernel that will manage your application.
        /// </summary>
        /// <returns>The created kernel.</returns>
        private static IKernel CreateKernel()
        {
            var kernel = new StandardKernel();
            try
            {
                kernel.Bind<Func<IKernel>>().ToMethod(ctx => () => new Bootstrapper().Kernel);
                kernel.Bind<IHttpModule>().To<HttpApplicationInitializationHttpModule>();
                RegisterServices(kernel);
                return kernel;
            }
            catch
            {
                kernel.Dispose();
                throw;
            }
        }

        /// <summary>
        /// Load your modules or register your services here!
        /// </summary>
        /// <param name="kernel">The kernel.</param>
        private static void RegisterServices(IKernel kernel)
        {

            kernel.Bind<NLog.ILogger>().To<NLog.Logger>();
            /*kernel.Bind<Core.ILogger>().ToMethod(x =>
                                                 {
                                                     var scope = x.Request.ParentRequest != null
                                                         ? x.Request.ParentRequest.Service.FullName
                                                         : x.Request.Service.FullName;
                 var log = (Core.ILogger) LogManager.GetLogger(scope, typeof(LoggerService));
                 return log;
             });*/

            kernel.Bind<IAuthenticateService>().To<JwtTokenAuthenticationService>();
            kernel.Bind<IAreaService>().To<AreaService>();
            kernel.Bind<IDocumentTypeService>().To<DocumentTypeService>();
            kernel.Bind<IEventTypeService>().To<EventTypeService>();
            kernel.Bind<IUserService>().To<UserService>();
            kernel.Bind<IDocumentService>().To<DocumentService>();
            kernel.Bind<IEventService>().To<EventService>();
            kernel.Bind<IQueryService>().To<QueryService>();
            kernel.Bind<IFtpService>().To<FtpService>();
            kernel.Bind<IFileCacheService>().To<FileCacheService>();
            kernel.Bind<IPopupService>().To<PopupService>();
            kernel.Bind<IJoinSamitiService>().To<JoinSamitiService>();

            kernel.Bind<IStateService>().To<StateService>();
            kernel.Bind<IDistrictService>().To<DistrictService>();
            kernel.Bind<ITalukaService>().To<TalukaService>();


            kernel.Bind<IConfigurationProvider>().To<ConfigurationProvider>().InSingletonScope();
            kernel.Bind<FileCacheProvder>().ToSelf().InSingletonScope();

            var configProvider = kernel.Get<IConfigurationProvider>();

            var jwtIssuer = new JwtIssuer(options =>
                                          {
                                              options.Audience = configProvider.JwtSettings.Audience;
                                              options.Issuer = configProvider.JwtSettings.Issuer;
                                              options.ExpireSeconds =
                                                  configProvider.JwtSettings.AccessExpirationSeconds;
                                              options.SecurityKey = Guid.NewGuid().ToString();
                                          });

            kernel.Bind<JwtIssuer>().ToConstant(jwtIssuer);
            
        }
    }
}