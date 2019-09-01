namespace VmmApi.Net.Models
{
    public class JwtSettings
    {
        public string Issuer { get; set; }
        public string Audience { get; set; }
        public int AccessExpirationSeconds { get; set; }
        public int RefreshExpirationMinutes { get; set; }
    }
}