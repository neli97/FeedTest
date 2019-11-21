using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using System.Xml.Linq;
using CurrencyCalculator.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CurrencyCalculator.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RssFeedsControler : Controller
    {
        private readonly CultureInfo culture = new CultureInfo("en-US");

        // GET: api/<controller>
        [HttpGet]
        public IEnumerable<Feed> Get()
        {
            try
            {
                XDocument doc = XDocument.Load("https://www.c-sharpcorner.com/rss/latestcontentall.aspx");
                var entries = from item in doc.Root.Descendants().First(i => i.Name.LocalName == "channel").Elements().Where(i => i.Name.LocalName == "item")
                              select new Feed
                              {
                                  Content = item.Elements().First(i => i.Name.LocalName == "description").Value,
                                  Link = (item.Elements().First(i => i.Name.LocalName == "link").Value).StartsWith("/") ? "https://www.c-sharpcorner.com" + item.Elements().First(i => i.Name.LocalName == "link").Value : item.Elements().First(i => i.Name.LocalName == "link").Value,
                                  PubDate = Convert.ToDateTime(item.Elements().First(i => i.Name.LocalName == "pubDate").Value, culture),
                                  PublishDate = Convert.ToDateTime(item.Elements().First(i => i.Name.LocalName == "pubDate").Value, culture).ToString("dd-MMM-yyyy"),
                                  Title = item.Elements().First(i => i.Name.LocalName == "title").Value,
                                  FeedType = (item.Elements().First(i => i.Name.LocalName == "link").Value).ToLowerInvariant().Contains("blog") ? "Blog" : (item.Elements().First(i => i.Name.LocalName == "link").Value).ToLowerInvariant().Contains("news") ? "News" : "Article",
                                  Author = item.Elements().First(i => i.Name.LocalName == "author").Value
                              };

                return entries.OrderByDescending(o => o.PubDate);
            }
            catch
            {
                List<Feed> feeds = new List<Feed>();
                Feed feed = new Feed();
                feeds.Add(feed);
                return feeds;
            }
        }
    }
}
