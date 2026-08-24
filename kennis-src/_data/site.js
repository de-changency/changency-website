module.exports = {
  // GoatCounter-code voor cookieloze statistieken (bijv. 'saar-insights');
  // null = geen statistieken en sorteren op datum
  goatcounter: null,
  key: 'changency',
  name: 'De Changency',
  domain: 'https://www.de-changency.nl',
  ogDefault: 'https://www.de-changency.nl/images/og-image.png',
  bookingUrl:
    'https://outlook.office.com/bookwithme/user/3ba84f5275a04a53a552e55d74b078a3@de-changency.nl/meetingtype/CZYwrjTpFEqelQYrEpkcug2?anonymous&ep=mcard',
  ctaDefault: {
    text: 'Plan een kennismaking →',
    url: 'https://outlook.office.com/bookwithme/user/3ba84f5275a04a53a552e55d74b078a3@de-changency.nl/meetingtype/CZYwrjTpFEqelQYrEpkcug2?anonymous&ep=mcard',
    intro: 'Benieuwd wat dit betekent voor jouw organisatie? Laten we het bespreken in een kort kennismakingsgesprek.',
  },
  // Cache-bust-versies van de CSS/JS (gelijk houden aan de bestaande pagina's;
  // pages.css is v18 omdat de kennis-stijlen daarin nieuw zijn)
  cssVersions: { variables: 8, base: 9, components: 7, pages: 19 },
  jsVersion: 3,
  // Bestaande statische pagina's (voor sitemap.xml) — nieuwe pagina hier bijschrijven
  pages: [
    { url: '/', changefreq: 'weekly', priority: '1.0' },
    { url: '/diensten/', changefreq: 'weekly', priority: '0.9' },
    { url: '/diensten/adoptie/', changefreq: 'monthly', priority: '0.8' },
    { url: '/diensten/digitale-vaardigheden/', changefreq: 'monthly', priority: '0.8' },
    { url: '/over/', changefreq: 'monthly', priority: '0.7' },
    { url: '/recensies/', changefreq: 'monthly', priority: '0.7' },
    { url: '/contact/', changefreq: 'monthly', priority: '0.8' },
    { url: '/privacy/', changefreq: 'yearly', priority: '0.4' },
  ],
};
