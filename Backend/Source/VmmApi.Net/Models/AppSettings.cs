using System;
using static VmmApi.Net.Models.AppEnums;

namespace VmmApi.Net.Models
{
    public class AppSettings
    {
        public string AllowedCorsDomain { get; set; }

        public string Issuer { get; set; }

        public string Audience { get; set; }

        public int AccessExpirationSeconds { get; set; }

        public int RefreshExpirationMinutes { get; set; }

        public Env Env { get; set; }
    }
}