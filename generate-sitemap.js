const fs = require("fs");
const path = require("path");

const SITE_URL = "https://freepropertysg.com";
const BLOG_DIR = "./blog";

const today = new Date().toISOString().split("T")[0];

function urlBlock(loc, priority, changefreq, lastmod = today) {
  return `
  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

let urls = [];

// Blog index
urls.push(
  urlBlock(`${SITE_URL}/blog/`, "0.7", "weekly")
);

// Blog posts
fs.readdirSync(BLOG_DIR).forEach(file => {
  if (file.endsWith(".html") && file !== "index.html") {
    const slug = file.replace(".html", "");
    urls.push(
      urlBlock(
        `${SITE_URL}/blog/${slug}`,
        "0.6",
        "monthly"
      )
    );
  }
});

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("")}
</urlset>`;

fs.writeFileSync("sitemap.xml", sitemap);
