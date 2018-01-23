import * as http from 'http';
import * as fs from 'fs';
import * as path from 'path';
import * as express from 'express';

import App from './server/render';

const app = express();

const server = http.createServer(app);

const staticFiles = [
  '/static/*',
  '/asset-manifest.json',
  '/manifest.json',
  '/service-worker.js',
  '/favicon.ico',
];

staticFiles.forEach(file => {
  app.get(file, (req, res) => {
    const filePath = path.join(__dirname, '../build', req.url);
    res.sendFile(filePath);
  });
});

app.get('*', async (req, res) => {
  const html = path.join(__dirname, '../build/index.html');
  const htmlData = fs.readFileSync(html).toString();
  const rendered = App(req.url);
  const renderedHtml = htmlData.replace(
    '<div id="root"></div>',
    `<div id="root">${rendered}</div>`
  );
  res.status(200).send(renderedHtml);
});

server.listen(3000);