using System;
using System.Net;
using System.Net.Http;
using System.Web.Http.Filters;

namespace VmmApi.Net.Core
{
    public class HandleExceptionFilter : ExceptionFilterAttribute
    {
        public override void OnException(HttpActionExecutedContext actionExecutedContext)
        {
            var logger =
                (Core.ILogger) actionExecutedContext
                               .ActionContext.ControllerContext.Configuration.DependencyResolver
                               .GetService(typeof(Core.ILogger));

            string exceptionMessage = string.Empty;
            Exception ex = null;
            if (actionExecutedContext.Exception.InnerException == null)
            {
                exceptionMessage = actionExecutedContext.Exception.Message;
                ex = actionExecutedContext.Exception;
            }
            else
            {
                exceptionMessage = actionExecutedContext.Exception.InnerException.Message;
                ex = actionExecutedContext.Exception.InnerException;
            }
            //We can log this exception message to the file or database.  

            logger.LogError(ex, exceptionMessage);

            var response = new HttpResponseMessage(HttpStatusCode.InternalServerError)
            {
                Content = new StringContent("An unhandled exception was thrown by service."),  
                ReasonPhrase = "Internal Server Error.Please Contact your Administrator."
            };
            actionExecutedContext.Response = response;
        }
    }
}