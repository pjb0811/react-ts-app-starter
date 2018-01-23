"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOM = require("react-dom");
const Root_1 = require("./client/Root");
const registerServiceWorker_1 = require("./registerServiceWorker");
require("./index.css");
ReactDOM.render(React.createElement(Root_1.default, null), document.getElementById('root'));
registerServiceWorker_1.default();
//# sourceMappingURL=index.js.map