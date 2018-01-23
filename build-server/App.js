"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
const pages_1 = require("./pages");
const Menu_1 = require("./components/Menu");
const react_hot_loader_1 = require("react-hot-loader");
class App extends React.Component {
    render() {
        return (React.createElement("div", { className: "App" },
            React.createElement("div", null,
                React.createElement(Menu_1.default, null),
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: pages_1.Home }),
                React.createElement(react_router_dom_1.Route, { path: "/test", component: pages_1.Test }))));
    }
}
exports.default = react_hot_loader_1.hot(module)(App);
//# sourceMappingURL=App.js.map