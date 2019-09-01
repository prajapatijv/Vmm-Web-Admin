using System;
using static VmmApi.Net.Models.AppEnums;

namespace VmmApi.Net.Models
{
    public class AppSettings
    {
        public string AllowedCorsDomain { get; set; }
        public Env Env { get; set; }
        public byte FileCacheTimeoutInMinutes { get; set; }
    }
}