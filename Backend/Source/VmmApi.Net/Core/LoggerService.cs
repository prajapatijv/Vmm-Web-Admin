using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using NLog;

namespace VmmApi.Net.Core
{
    public interface ILogger
    {
        void LogError(Exception exception, string message);
    }

    public class LoggerService : ILogger
    {
        private readonly NLog.ILogger logger;

        public LoggerService(NLog.ILogger logger)
        {
            this.logger = logger;
        }

        public void LogError(Exception exception, string message)
        {
            this.logger.Error(exception, message);
        }
    }
}