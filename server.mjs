// server.mjs
import { createServer } from 'https';
import { parse } from 'url';
import next from 'next';
import fs from 'fs';

const dev = false; // Use false for production mode
const app = next({ dev });
const handle = app.getRequestHandler();

const httpsOptions = {
  key: fs.readFileSync('/etc/letsencrypt/live/megascale.cloud/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/megascale.cloud/fullchain.pem'),
};

app.prepare().then(() => {
  createServer(httpsOptions, (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(3011, () => {
    console.log('✅ Next.js running at https://megascale.cloud:3011');
  });
});
