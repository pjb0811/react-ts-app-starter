"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
// import { Route, BrowserRouter } from 'react-router-dom';
const react_router_dom_1 = require("react-router-dom");
const pages_1 = require("./pages");
// import Menu from './components/Menu';
const react_hot_loader_1 = require("react-hot-loader");
class App extends React.Component {
    render() {
        return (React.createElement("div", { className: "App" },
            React.createElement(react_router_dom_1.BrowserRouter, null,
                React.createElement(pages_1.Home, null),
                React.createElement(pages_1.Test, null))));
    }
}
exports.default = react_hot_loader_1.hot(module)(App);
//# sourceMappingURL=App.js.map