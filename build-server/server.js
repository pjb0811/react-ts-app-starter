"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const fs = require("fs");
const path = require("path");
const express = require("express");
const render_1 = require("./server/render");
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
app.get('*', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const html = path.join(__dirname, '../build/index.html');
    const htmlData = fs.readFileSync(html).toString();
    const rendered = render_1.default(req.url);
    const renderedHtml = htmlData.replace('<div id="root"></div>', `<div id="root">${rendered}</div>`);
    res.status(200).send(renderedHtml);
}));
server.listen(3000);
//# sourceMappingURL=server.js.map