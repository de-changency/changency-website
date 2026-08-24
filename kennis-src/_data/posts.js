const path = require('path');

const CONTENT_DIR = path.resolve(process.env.CONTENT_DIR || '../blog-content');
const { loadPosts } = require(path.join(CONTENT_DIR, 'shared', 'posts.js'));
const site = require('./site.js');

// Weergaven per artikel ophalen uit GoatCounter (cookieloze statistieken).
// Werkt zodra site.goatcounter is ingevuld en "visitor counts" in GoatCounter
// aanstaat; bij fouten of ontbrekende data telt een artikel gewoon als 0.
async function haalWeergaven(posts) {
  if (!site.goatcounter) return;
  await Promise.all(posts.map(async (post) => {
    try {
      const res = await fetch(
        `https://${site.goatcounter}.goatcounter.com/counter/${encodeURIComponent(post.url)}.json`,
        { signal: AbortSignal.timeout(4000) }
      );
      if (!res.ok) return;
      const data = await res.json();
      post.weergaven = parseInt(String(data.count_unique || data.count || '0').replace(/\D/g, ''), 10) || 0;
    } catch (e) {
      // geen verbinding of geen data: artikel telt als 0 weergaven
    }
  }));
}

module.exports = async () => {
  const posts = loadPosts({
    contentDir: CONTENT_DIR,
    site: 'changency',
    includeDrafts: process.env.SHOW_DRAFTS === '1',
  });
  posts.forEach((p) => { p.weergaven = 0; });
  await haalWeergaven(posts);
  // Volgorde: uitgelicht eerst, dan meest bekeken, dan nieuwste
  posts.sort((a, b) =>
    (b.uitgelicht - a.uitgelicht) || (b.weergaven - a.weergaven) || (b.date - a.date));
  return posts;
};
