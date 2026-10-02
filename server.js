const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const ROOT = __dirname;
const PUBLIC_EXT = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav',
};
// Files in the project root that must never be served
const PRIVATE = new Set(['server.js']);

const server = http.createServer((req, res) => {
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  } catch {
    res.writeHead(400).end('Bad request');
    return;
  }
  if (pathname === '/') pathname = '/index.html';

  const filePath = path.join(ROOT, pathname);
  const ext = path.extname(filePath).toLowerCase();
  const relative = path.relative(ROOT, filePath);

  if (
    relative.startsWith('..') ||
    relative.split(path.sep).some((p) => p.startsWith('.')) ||
    PRIVATE.has(relative) ||
    !PUBLIC_EXT[ext]
  ) {
    res.writeHead(404).end('Not found');
    return;
  }

  fs.stat(filePath, (err, stat) => {
    if (err || !stat.isFile()) {
      res.writeHead(404).end('Not found');
      return;
    }
    res.writeHead(200, {
      'Content-Type': PUBLIC_EXT[ext],
      'Content-Length': stat.size,
    });
    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(PORT, () => console.log(`FruitSmasher running on port ${PORT}`));
