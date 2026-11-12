// Génère assets/guide-longevite/couverture-guide-longevite.png (A5, 1748 × 2480 px) à partir de _guide/cover.html
// Usage : node _guide/build-cover.js
const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const root = path.resolve(__dirname, '..');
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 874, height: 1240 }, deviceScaleFactor: 2 });
  await page.goto('file://' + path.join(__dirname, 'cover.html'));
  await page.screenshot({ path: path.join(root, 'assets/guide-longevite/couverture-guide-longevite.png'), fullPage: false });
  await browser.close();
})();
