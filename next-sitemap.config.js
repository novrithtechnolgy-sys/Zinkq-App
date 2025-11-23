/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://zinkq.com",
  generateRobotsTxt: true, // Generates robots.txt
  sitemapSize: 7000,
  exclude: ["/api/*", "/admin/*", "/thank-you","/subcribe"],
  generateIndexSitemap: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "*",
        disallow: ["/api/*", "/admin/*,/subcribe","/thank-you"],
      },
    ],
    additionalSitemaps: ["https://zinkq.com/sitemap.xml"],
  },
};
