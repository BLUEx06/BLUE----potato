using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using CampWebsite.Models;
namespace CampWebsite.ViewModels
{
    public class NewPhotoViewModel
    {

        //public tTentPhoto tTentPhoto { get; set; }

        public string TentName { get; set; }
        public int CampsiteID { get; set; }
        public string CampsiteName { get; set; }



        [Display(Name = "帳篷照片")]
        [Required(ErrorMessage = "選擇照片！")]
        public HttpPostedFileBase[] OtherPhotos { get; set; }


    }
}