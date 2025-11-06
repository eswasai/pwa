const { blogsData } = require("./src/data/blogs-data.js");

module.exports = {
  siteUrl: "https://framespik.com",
  generateRobotsTxt: true, // Generate /robots.txt
  changefreq: "daily",
  async additionalPaths(config) {
    return [
      { loc: "/", priority: 1.0, changefreq: "daily" },
      { loc: "/3d-album", priority: 0.8, changefreq: "daily" },
      { loc: "/3rd-party-integration", priority: 0.8, changefreq: "daily" },
      { loc: "/about", priority: 0.8, changefreq: "daily" },
      { loc: "/ai-image-delivery", priority: 0.8, changefreq: "daily" },
      { loc: "/any-where-view", priority: 0.8, changefreq: "daily" },
      { loc: "/blogs", priority: 0.8, changefreq: "daily" },
      { loc: "/career", priority: 0.8, changefreq: "daily" },
      { loc: "/cloud-rentals", priority: 0.8, changefreq: "daily" },
      { loc: "/contact", priority: 0.8, changefreq: "daily" },
      { loc: "/crm-tools", priority: 0.9, changefreq: "daily" },
      { loc: "/custom-app", priority: 0.8, changefreq: "daily" },
      { loc: "/custom-website", priority: 0.8, changefreq: "daily" },
      { loc: "/data-backup", priority: 0.8, changefreq: "daily" },
      { loc: "/data-safe", priority: 0.8, changefreq: "daily" },
      { loc: "/download", priority: 0.9, changefreq: "daily" },
      { loc: "/faq", priority: 0.8, changefreq: "daily" },
      { loc: "/features", priority: 0.9, changefreq: "daily" },
      { loc: "/get-started", priority: 0.9, changefreq: "daily" },
      { loc: "/learning-school", priority: 0.8, changefreq: "daily" },
      { loc: "/memory-page", priority: 0.8, changefreq: "daily" },
      { loc: "/nfc-cards", priority: 0.8, changefreq: "daily" },
      { loc: "/payment-remainders", priority: 0.8, changefreq: "daily" },
      { loc: "/photo-selection", priority: 0.8, changefreq: "daily" },
      { loc: "/pricing", priority: 0.95, changefreq: "daily" },
      { loc: "/privacy-policy", priority: 0.8, changefreq: "daily" },
      { loc: "/scheduling", priority: 0.8, changefreq: "daily" },
      { loc: "/shared-cloud", priority: 0.8, changefreq: "daily" },
      { loc: "/storage", priority: 0.9, changefreq: "daily" },
      { loc: "/team", priority: 0.8, changefreq: "daily" },
      { loc: "/terms-and-conditions", priority: 0.8, changefreq: "daily" },
      { loc: "/track-and-analyze-finance", priority: 0.8, changefreq: "daily" },
      { loc: "/unlimited-album-videos", priority: 0.8, changefreq: "daily" },
      { loc: "/vision-camera", priority: 0.8, changefreq: "daily" },
      { loc: "/work-updates", priority: 0.8, changefreq: "daily" },

      // Dynamically add blog pages
      ...blogsData.map((blog) => ({
        loc: `/blogs/${blog.navigation}`, // Blog URLs
        priority: 0.7,
        changefreq: "weekly",
      })),
    ];
  },
};
