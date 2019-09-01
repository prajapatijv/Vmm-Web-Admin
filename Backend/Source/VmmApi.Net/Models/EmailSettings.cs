namespace VmmApi.Net.Models
{
    public class EmailSettings
    {
        public string SmtpServer { get; set; }
        public byte SmtpPort { get; set; }
        public string SmtpAuthEmail { get; set; }
        public string SmtpAuthPassword { get; set; }
        public bool SmtpEnableSSL { get; set; }
        public string FromEmail { get; set; }
        public string ImgDomain { get; set; }
        public string AdminContact { get; set; }
    }
}