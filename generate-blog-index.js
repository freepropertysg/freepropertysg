const fs = require("fs");

const BLOG_DIR = "./blog";
const INDEX_FILE = "./blog/index.html";

const posts = fs.readdirSync(BLOG_DIR)
  .filter(f => f.endsWith(".html") && f !== "index.html");

const list = posts.map(file => {
  const slug = file.replace(".html", "");
  const title = slug.replace(/-/g, " ")
    .replace(/\b\w/g, c => c.toUpperCase());
  return `<li><a href="/blog/${slug}">${title}</a></li>`;
}).join("\n");

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Blog</title>
</head>
<body>
<ul>
${list}
</ul>
</body>
</html>`;

fs.writeFileSync(INDEX_FILE, html);