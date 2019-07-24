using System;
using System.Configuration;
using VmmApi.Net.Models;

namespace VmmApi.Net.Services
{
    public interface IConfigurationProvider
    {
        AppSettings AppSettings { get; }
    }

    public class ConfigurationProvider : IConfigurationProvider
    {
        private AppSettings appSettings;

        public AppSettings AppSettings
        {
            get => this.appSettings;
            private set => this.appSettings = value;
        }

        public ConfigurationProvider()
        {
            this.LoadSettings();
        }

        private void LoadSettings()
        {
            this.appSettings = new AppSettings
            {
                AllowedCorsDomain = ConfigurationManager.AppSettings["AllowedCorsDomain"],
                Issuer = ConfigurationManager.AppSettings["Issuer"],
                Audience = ConfigurationManager.AppSettings["Audience"],
                AccessExpirationSeconds = 
                    Convert.ToInt32(ConfigurationManager.AppSettings["AccessExpirationMinutes"]) * 60,
                RefreshExpirationMinutes = Convert.ToInt32(ConfigurationManager.AppSettings["RefreshExpirationMinutes"]) * 60
            };
        }
    }
}