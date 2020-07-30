using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Text;
using VmmApi.Net.DataServices;
using VmmApi.Net.DataServices.Entities;
using VmmApi.Net.Models;

namespace VmmApi.Net.Services
{
    public interface IQueryService
    {
        QueryViewModel GetAllQueries();
        QueryDetail GetById(int id);
        void Save(QueryDetail queryDetail);
        void Delete(int id);
    }

    public class QueryService : IQueryService
    {
        private readonly VmmDbContext dbContext;
        private readonly IConfigurationProvider configurationProvider;

        public QueryService (VmmDbContext dbContext, IConfigurationProvider configurationProvider)
        {
            this.dbContext = dbContext;
            this.configurationProvider = configurationProvider;
        }

        public QueryViewModel GetAllQueries()
        {
            return new QueryViewModel
            {
                Queries = this.dbContext.Queries.OrderByDescending(o => o.CreatedDate).ToList()
            };
        }

        public QueryDetail GetById(int id)
        {
            return this.dbContext.Queries.FirstOrDefault(e => e.Id == id);
        }

                
        public void Delete(int id)
        {
            var entity = this.GetById(id);
            if (entity != null)
            {
                this.dbContext.Queries.Remove(entity);
                this.dbContext.SaveChanges();
            }
        }

        public void Save(QueryDetail query)
        {
            this.dbContext.Queries.Add(query);

            if (query.Id > 0)
            {
                this.dbContext.Entry(query).State = System.Data.Entity.EntityState.Modified;
            }

            this.dbContext.SaveChanges();

            SendReplyEmail(query);
        }

        private void SendReplyEmail(QueryDetail queryDetail)
        {
            var emailSettings = configurationProvider.EmailSettings;
            var regard = "IT Samiti, Vallabh Manvoddharak Mandal, Anaval";

            StringBuilder emailText = new StringBuilder();
            object[] objArray = new object[] { regard, queryDetail.Name, queryDetail.Query, queryDetail.Answer, emailSettings.AdminContact, emailSettings.ImgDomain };
            emailText.AppendFormat("<table width='580' border='0' cellspacing='0' cellpadding='0' style='font:11px Verdana,Arial,Helvetica,sans-serif;color:#333'>\r\n  <tbody>\r\n    <tr valign='top'>\r\n      <td colspan='3'><table width='100%' border='0' cellspacing='0' cellpadding='0'>\r\n          <tbody>\r\n            <tr valign='top'>\r\n              <td width='130px;'><a href='http://mokshmargdharm.org' target='_blank' ><img border='0' alt='Jay Parmatma' src='{5}logo.png'></a></td>\r\n            </tr>\r\n            <tr>\r\n              <td><img width='1' height='10' border='0' src='{5}pixel.gif' alt=''></td>\r\n            </tr>\r\n            <tr>\r\n              <td></td>\r\n            </tr>\r\n          </tbody>\r\n        </table></td>\r\n    </tr>\r\n    <tr>\r\n      <td colspan='3'><img height='13' border='0' alt='' style='vertical-align:bottom' src='{5}scr_emailTopCorners_580wx13h.gif'></td>\r\n    </tr>\r\n    <tr>\r\n      <td width='12' style='background:url({5}scr_emailLeftBorder_13wx1h.gif) left repeat-y;border-left:1px solid #ddd'><img border='0' alt='' src='{5}pixel.gif'></td>\r\n      <td width='530' style='width:530px;word-wrap:break-word;padding:12px;margin:0'><table width='100%' style='font:Verdana,Arial,Helvetica,sans-serif'>\r\n          <tbody>\r\n            <tr>\r\n              <td></td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n        <p>Dear {1},</p>\r\n        <p>Jay Parmatma / જય પરમાત્મા</p>\r\n        \r\n        <table cellspacing='0' cellpadding='10' style='border:1px solid #eee;font:11px Verdana,Arial,Helvetica,sans-serif'>\r\n          <tbody>\r\n            <tr>\r\n              <td style='margin:0;font:11px Verdana,Arial,Helvetica,sans-serif;color:#333'>\r\n\t\t\t                 <ul>\r\n                  <li style='list-style:none;'><span style='position:absolute margin-top:1.5px;'><img  border='0' width='11px;' src='{5}arrow.jpg'/></span><span style='margin-left: 4px;'><b>Question / ( આપનો પ્રશ્ન ) :</b> </span>{2}</li><br />\r\n                  <li style='list-style:none;'><span style='margin-top:1.5px position:absolute;'><img  border='0' width='11px;' src='{5}arrow.jpg'/></span><span style='margin-left: 4px;'><b>Answer / (ઉત્તર) :</b> </span>{3}</li>\r\n               </ul></td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n        <br>\r\n        <p>{0} <br>આઈટી સમિતિ, વલ્લભમાનવોઘ્‍ધારક મંડળ, અનાવલ</p></td>\r\n      <td width='12' style='background:url({5}scr_emailRightBorder_13wx1h.gif) left repeat-y;border-right:1px solid #ddd'><img border='0' alt='' src='{5}pixel.gif'></td>\r\n    </tr>\r\n    <tr>\r\n      <td colspan='3'><img height='13' border='0' alt='' src='{5}scr_emailBottomCorners_580wx13h.gif'></td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n", objArray);

            MailMessage message = new MailMessage(emailSettings.FromEmail, queryDetail.Email, "પ્રશ્નોતરી, Answer of your question on mokshmargdharm.org", emailText.ToString());
            message.IsBodyHtml = true;
            SmtpClient smtp = new SmtpClient(emailSettings.SmtpServer)
            {
                Port = emailSettings.SmtpPort,
                UseDefaultCredentials = false,
                EnableSsl = emailSettings.SmtpEnableSSL,
                Credentials = new NetworkCredential(emailSettings.SmtpAuthEmail, emailSettings.SmtpAuthPassword)
            };

            smtp.Send(message);
        }

    }
}