const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const APP_DIR = path.join(process.cwd(), 'src', 'app');
const OUTPUT_ROUTES_FILE = path.join(process.cwd(), 'public/pages-routes.json');
const OUTPUT_INDEX_FILE = path.join(process.cwd(), 'public/pages-index.json');

// Generate All Routes Dynamically
function getAllRoutes(dir, baseRoute = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let routes = [];

  const hasPageFile = entries.some(e =>
    e.isFile() && (e.name === 'page.js' || e.name === 'page.tsx')
  );

  if (hasPageFile) {
    const route = baseRoute === '' ? '/' : baseRoute;
    routes.push(route);
  }

  for (const entry of entries) {
    if (entry.isDirectory()) {
      const newBaseRoute = `${baseRoute}/${entry.name}`;
      const fullPath = path.join(dir, entry.name);
      routes = routes.concat(getAllRoutes(fullPath, newBaseRoute));
    }
  }

  return routes;
}

// Generate routes and save to file
const routes = getAllRoutes(APP_DIR);
fs.writeFileSync(OUTPUT_ROUTES_FILE, JSON.stringify(routes, null, 2));
console.log(`✅ Found ${routes.length} routes and saved to public/pages-routes.json`);

// Index Each Route's Text Content
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const result = [];

  for (const route of routes) {
    console.log(`🔍 Indexing ${route}...`);

    await page.goto(`http://localhost:3000${route}`, { waitUntil: 'networkidle0' });

    const content = await page.evaluate(() => {
      // Remove elements that should not be indexed
      document.querySelectorAll('.exclude-from-index, [data-noindex="true"]').forEach(el => el.remove());

      return document.body.innerText.trim();
    });

    result.push({
      route,
      content,
    });

    console.log(`✅ Indexed: ${route}`);
  }

  await browser.close();

  fs.writeFileSync(OUTPUT_INDEX_FILE, JSON.stringify(result, null, 2));
  console.log('🎉 All pages indexed successfully! Saved to public/pages-index.json');
})();










// const fs = require('fs');
// const path = require('path');
// const puppeteer = require('puppeteer');

// const APP_DIR = path.join(process.cwd(), 'src', 'app');
// const OUTPUT_ROUTES_FILE = path.join(process.cwd(), 'public/pages-routes.json');
// const OUTPUT_INDEX_FILE = path.join(process.cwd(), 'public/pages-index.json');

// // Step 1️⃣: Generate All Routes Dynamically
// function getAllRoutes(dir, baseRoute = '') {
//   const entries = fs.readdirSync(dir, { withFileTypes: true });
//   let routes = [];

//   const hasPageFile = entries.some(e =>
//     e.isFile() && (e.name === 'page.js' || e.name === 'page.tsx')
//   );

//   if (hasPageFile) {
//     const route = baseRoute === '' ? '/' : baseRoute;
//     routes.push(route);
//   }

//   for (const entry of entries) {
//     if (entry.isDirectory()) {
//       const newBaseRoute = `${baseRoute}/${entry.name}`;
//       const fullPath = path.join(dir, entry.name);
//       routes = routes.concat(getAllRoutes(fullPath, newBaseRoute));
//     }
//   }

//   return routes;
// }

// // Generate routes and save to file
// const routes = getAllRoutes(APP_DIR);
// fs.writeFileSync(OUTPUT_ROUTES_FILE, JSON.stringify(routes, null, 2));
// console.log(`✅ Found ${routes.length} routes and saved to public/pages-routes.json`);

// // Step 2️⃣: Index Each Route’s Text Content
// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   const result = [];

//   for (const route of routes) {
//     console.log(`🔍 Indexing ${route}...`);

//     await page.goto(`http://localhost:3000${route}`, { waitUntil: 'networkidle0' });

//     const content = await page.evaluate(() => {
//       return document.body.innerText.trim();
//     });

//     result.push({
//       route,
//       content,
//     });

//     console.log(`✅ Indexed: ${route}`);
//   }

//   await browser.close();

//   fs.writeFileSync(OUTPUT_INDEX_FILE, JSON.stringify(result, null, 2));
//   console.log('🎉 All pages indexed successfully! Saved to public/pages-index.json');
// })();









// const fs = require('fs');
// const path = require('path');

// const APP_DIR = path.join(process.cwd(), 'src', 'app');
// const OUTPUT_ROUTES_FILE = path.join(process.cwd(), 'public/pages-routes.json');

// function getAllRoutes(dir, baseRoute = '') {
//   const entries = fs.readdirSync(dir, { withFileTypes: true });
//   let routes = [];

//   let hasPageFile = entries.some(e =>
//     e.isFile() && (e.name === 'page.js' || e.name === 'page.tsx')
//   );

//   if (hasPageFile) {
//     let route = baseRoute === '' ? '/' : baseRoute;
//     routes.push(route);
//   }

//   for (let entry of entries) {
//     if (entry.isDirectory()) {
//       const newBaseRoute = `${baseRoute}/${entry.name}`;
//       const fullPath = path.join(dir, entry.name);
//       routes = routes.concat(getAllRoutes(fullPath, newBaseRoute));
//     }
//   }

//   return routes;
// }

// const routes = getAllRoutes(APP_DIR);

// fs.writeFileSync(OUTPUT_ROUTES_FILE, JSON.stringify(routes, null, 2));

// console.log(`✅ Found ${routes.length} routes and saved to public/pages-routes.json`);









// const puppeteer = require('puppeteer');
// const fs = require('fs');

// const routes = [
//   '/', 
//   '/about',
//   '/philosophy/in-brief',
//   '/books',
//   '/resource-center',
//   // Add your real list of routes
// ];

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();

//   const result = [];

//   for (const route of routes) {
//     await page.goto(`http://localhost:3000${route}`, { waitUntil: 'networkidle0' });

//     const content = await page.evaluate(() => {
//       return document.body.innerText.trim();
//     });

//     result.push({
//       route,
//       content,
//     });

//     console.log(`Indexed route: ${route}`);
//   }

//   await browser.close();

//   fs.writeFileSync('./public/pages-index.json', JSON.stringify(result, null, 2));

//   console.log('✅ All pages indexed successfully!');
// })();












// const fs = require('fs');
// const path = require('path');

// const PAGES_DIR = path.join(process.cwd(), 'src', 'app');
// const OUTPUT_FILE = path.join(process.cwd(), 'public', 'pages-index.json');

// function getAllPageFiles(dir, baseRoute = '') {
//   const entries = fs.readdirSync(dir, { withFileTypes: true });
//   let pages = [];

//   for (let entry of entries) {
//     const fullPath = path.join(dir, entry.name);

//     if (entry.isDirectory()) {
//       pages = pages.concat(getAllPageFiles(fullPath, `${baseRoute}/${entry.name}`));
//     } else if (entry.name === 'page.js' || entry.name === 'page.tsx') {
//       let route = `${baseRoute}`;
//       if (route === '') route = '/';

//       // Read the full file content as plain text
//       let content = '';
//       try {
//         content = fs.readFileSync(fullPath, 'utf-8');
//       } catch (err) {
//         console.warn(`Could not read content from ${fullPath}`);
//       }

//       pages.push({
//         route,
//         content,
//       });
//     }
//   }

//   return pages;
// }

// const pages = getAllPageFiles(PAGES_DIR).filter(p => !p.route.startsWith('/api'));

// fs.writeFileSync(OUTPUT_FILE, JSON.stringify(pages, null, 2));

// console.log(`Generated ${pages.length} pages in public/pages-index.json`);
