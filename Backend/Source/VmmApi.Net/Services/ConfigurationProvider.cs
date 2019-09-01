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
        JwtSettings JwtSettings { get; }
        FtpSettings FtpSettings { get; }
    }

    public class ConfigurationProvider  : IConfigurationProvider
    {
        private AppSettings appSettings;
        private JwtSettings jwtSettings;
        private FtpSettings ftpSettings;

        public AppSettings AppSettings
        {
            get => this.appSettings;
            private set => this.appSettings = value;
        }

        public JwtSettings JwtSettings
        {
            get => this.jwtSettings;
            private set => this.jwtSettings = value;
        }

        public FtpSettings FtpSettings
        {
            get => this.ftpSettings;
            private set => this.ftpSettings = value;
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
                Env = (Env)Enum.Parse(typeof(Env), env),
                FileCacheTimeoutInMinutes = GetSetting<byte>("FileCacheTimeoutInMinutes", 5)
            };

            this.ftpSettings = new FtpSettings
            {
                FTPRootPath = $"ftp://{GetSetting<string>("FTPServer", string.Empty)}/{GetSetting<string>("FTPRootFolder", string.Empty)}",
                FTPUserName = GetSetting<string>("FTPUserName", string.Empty),
                FTPPassword = GetSetting<string>("FTPPassword", string.Empty),
            };

            this.jwtSettings = new JwtSettings
            {
                Issuer = GetSetting<string>("Issuer", string.Empty),
                Audience = GetSetting<string>("Audience", string.Empty),
                AccessExpirationSeconds = GetSetting<int>("AccessExpirationMinutes", 1500) * 60,
                RefreshExpirationMinutes = GetSetting<int>("RefreshExpirationMinutes", 1500) * 60,
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