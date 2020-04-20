using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace VmmApi.Net.Extensions
{
    public static class Extension
    {
        public static string SanotizeFileName(this string fileName)
        {
            var name = fileName.Trim(Path.GetInvalidFileNameChars());
            return name.Trim(Path.GetInvalidPathChars()).Replace(@"""", @"\""");
        }

    }
}