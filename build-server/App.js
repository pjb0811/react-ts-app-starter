"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_hot_loader_1 = require("react-hot-loader");
// import { Home, Test } from './pages';
const Menu_1 = require("./components/Menu");
// import { Route } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';
class App extends React.Component {
    render() {
        return (React.createElement("div", { className: "App" },
            React.createElement("div", null,
                React.createElement(Menu_1.default, null))));
        // return <div>test</div>;
    }
}
exports.default = react_hot_loader_1.hot(module)(App);
//# sourceMappingURL=App.js.map