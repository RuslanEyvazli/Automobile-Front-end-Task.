using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Service.Controllers
{
    public class ShopController : Controller
    {
        // GET: Shop
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Aksesuar()
        {
            return View();
        }
        public ActionResult Bataries()
        {
            return View();
        }
        public ActionResult Oil()
        {
            return View();
        }

        public ActionResult Product()
        {
            return View();
        }

        public ActionResult Details()
        {
            return View();
        }
    }
}