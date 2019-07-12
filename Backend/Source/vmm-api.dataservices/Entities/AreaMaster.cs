﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace VmmApi.DataServices.Entities
{
    [Table("Area_Master")]
    public class AreaMaster
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("Area_Id")]
        public byte Id { get; set; }

        [Column("Area_Name", TypeName = "nvarchar(100)")]
        public string AreaName { get; set; }
    }
}
