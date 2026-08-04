const path = require('path');

const CONTENT_DIR = path.resolve(process.env.CONTENT_DIR || '../blog-content');
const { loadPosts } = require(path.join(CONTENT_DIR, 'shared', 'posts.js'));

module.exports = () =>
  loadPosts({
    contentDir: CONTENT_DIR,
    site: 'changency',
    includeDrafts: process.env.SHOW_DRAFTS === '1',
  });
