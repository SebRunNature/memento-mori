// Génère assets/guide-longevite/guide-pratique-longevite.pdf à partir de _guide/guide-longevite.html
// Usage : node _guide/build-pdf.js   (Chromium + Playwright)
const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const root = path.resolve(__dirname, '..');
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('file://' + path.join(__dirname, 'guide-longevite.html'));
  await page.pdf({
    path: path.join(root, 'assets/guide-longevite/guide-pratique-longevite.pdf'),
    format: 'A5', printBackground: true, preferCSSPageSize: true,
    displayHeaderFooter: true, headerTemplate: '<span></span>',
    footerTemplate: '<div style="width:100%;font-size:7px;color:#71717a;text-align:center;font-family:Arial,sans-serif">montre-de-vie.com/guide-longevite &nbsp;·&nbsp; <span class="pageNumber"></span>/<span class="totalPages"></span></div>',
    margin: { top: '13mm', bottom: '15mm', left: '12mm', right: '12mm' }
  });
  await browser.close();
})();
