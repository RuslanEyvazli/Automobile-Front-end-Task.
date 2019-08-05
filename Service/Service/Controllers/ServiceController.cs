using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Service.Controllers
{
    public class ServiceController : Controller
    {
        // GET: Serviceontroller
        public ActionResult Index(string name)
        {
            return View();
        }
    }
}