using System;
using System.Configuration;
using System.Linq;
using VmmApi.Net.Models;
using static VmmApi.Net.Models.AppEnums;

namespace VmmApi.Net.Services
{
    public interface IConfigurationProvider
    {
        AppSettings AppSettings { get; }
    }

    public class ConfigurationProvider  : IConfigurationProvider
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
            var env = GetSetting<string>("Env", Env.Production.ToString());

            this.appSettings = new AppSettings
            {
                AllowedCorsDomain = GetSetting<string>("AllowedCorsDomain", string.Empty),
                Issuer = GetSetting<string>("Issuer", string.Empty),
                Audience = GetSetting<string>("Audience", string.Empty),
                AccessExpirationSeconds = GetSetting<int>("AccessExpirationMinutes", 1500) * 60,
                RefreshExpirationMinutes = GetSetting<int>("RefreshExpirationMinutes", 1500) * 60,
                Env = (Env)Enum.Parse(typeof(Env), env),
                FTPUserName = GetSetting<string>("FTPUserName", string.Empty),
                FtpPassword = GetSetting<string>("FTPPassword", string.Empty),
                FTPServer = GetSetting<string>("FTPServer", string.Empty)
            };
        }

        private T GetSetting<T>(string key, T defaultValue)
        {
            return (KeyExists(key)) ? (T)Convert.ChangeType(ConfigurationManager.AppSettings[key], typeof(T)) : defaultValue;
        }

        private bool KeyExists(string key)
        {
            return ConfigurationManager.AppSettings.AllKeys.Any(k => k == key);
        }
    }
}