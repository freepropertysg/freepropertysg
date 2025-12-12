const fs = require("fs");

const SITE_URL = "https://freepropertysg.com";
const BLOG_DIR = "./blog";

let urls = [
  "/",
  "/about.html",
  "/blog/",
  "/contact.html"
];

fs.readdirSync(BLOG_DIR).forEach(file => {
  if (file.endsWith(".html") && file !== "index.html") {
    urls.push(`/blog/${file.replace(".html", "")}`);
  }
});

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `
  <url>
    <loc>${SITE_URL}${u}</loc>
  </url>`).join("")}
</urlset>`;

fs.writeFileSync("sitemap.xml", sitemap);