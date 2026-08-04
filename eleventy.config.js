const fs = require('fs');
const path = require('path');

// Checkout van de blog-content-repo (CI zet CONTENT_DIR=blog-content;
// lokaal staat de repo als sibling naast deze repo)
const CONTENT_DIR = process.env.CONTENT_DIR || '../blog-content';

// Alles wat NIET mee moet naar de site-output (build-infra)
const EXCLUDE = new Set([
  'node_modules',
  '_site',
  'kennis-src',
  'blog-content',
  '.git',
  '.github',
  '.gitignore',
  'package.json',
  'package-lock.json',
  'eleventy.config.js',
  '.DS_Store',
]);

module.exports = function (eleventyConfig) {
  // De bestaande statische site byte-identiek meekopiëren (incl. CNAME)
  for (const entry of fs.readdirSync('.')) {
    if (EXCLUDE.has(entry)) continue;
    eleventyConfig.addPassthroughCopy({ [entry]: entry });
  }

  // Afbeeldingen uit de content-repo
  const contentImages = path.join(CONTENT_DIR, 'images');
  if (fs.existsSync(contentImages)) {
    eleventyConfig.addPassthroughCopy({ [contentImages]: 'kennis/images' });
  }

  return {
    dir: {
      input: 'kennis-src',
      output: '_site',
      includes: '_includes',
      data: '_data',
    },
    templateFormats: ['njk'],
  };
};
