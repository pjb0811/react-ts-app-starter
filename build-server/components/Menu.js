"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
const Menu = () => {
    return (React.createElement("div", null,
        React.createElement("ul", null,
            React.createElement("li", null,
                React.createElement(react_router_dom_1.Link, { to: "/" }, "Home")),
            React.createElement("li", null,
                React.createElement(react_router_dom_1.Link, { to: "/test" }, "test"))),
        React.createElement("hr", null)));
};
exports.default = Menu;
//# sourceMappingURL=Menu.js.map