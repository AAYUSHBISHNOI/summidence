const fs = require("fs");
const path = require("path");
const { SitemapStream, streamToPromise } = require("sitemap");

const WEBSITE_URL = "https://www.summidence.com"; // No trailing slash here

const pages = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/school", changefreq: "weekly", priority: 0.8 },
  { url: "/about-us", changefreq: "monthly", priority: 0.7 },
  { url: "/Business", changefreq: "weekly", priority: 0.8 },
  { url: "/kids", changefreq: "weekly", priority: 0.7 },
  { url: "/our-contact-us", changefreq: "monthly", priority: 0.6 },
  { url: "/upcoming-programs", changefreq: "weekly", priority: 0.7 },
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
