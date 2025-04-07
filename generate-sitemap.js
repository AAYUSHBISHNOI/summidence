const fs = require("fs");
const path = require("path");
const { SitemapStream, streamToPromise } = require("sitemap");

const WEBSITE_URL = "https://www.summidence.com/"; // Your real domain

const pages = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/about-us", changefreq: "weekly", priority: 0.8 },
  { url: "/contact-us", changefreq: "monthly", priority: 0.7 },
  { url: "/service", changefreq: "weekly", priority: 0.8 },
  { url: "/our-clients", changefreq: "monthly", priority: 0.6 },
];

const sitemap = new SitemapStream({ hostname: WEBSITE_URL });

pages.forEach((page) => {
  sitemap.write(page);
});

sitemap.end();

streamToPromise(sitemap).then((data) => {
  fs.writeFileSync(path.join(__dirname, "public", "sitemap.xml"), data);
  console.log("✅ Sitemap generated successfully!");
});
