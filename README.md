# react-ts-app-starter
Starter Kit for projects using React + Typescript.

## 1. Prerequisites
You need to install [nodejs](https://nodejs.org/) for your OS environment.
### Package configuration
- **React**
  - react
  - create-react-app
  - react-router@v4
  - react-helmet
  - react-hot-loader@v4
  - react-loadable
- **Redux**
  - react-redux
  - redux-actions
  - redux-logger
  - redux-thunk
    - redux-promise-middleware
  - redux-saga
  - immutable
- **MobX**
  - mobx-react
- **Typescript**
- **CSS Framework**
  - semantic-ui-css
  - semantic-ui-react
- **Server Side Rendering**
  - express
- **Module Loader/bundler**
  - webpack
- **Package Manager**
  - yarn

## 2. Installation Process
### Installing the package
```
  npm install
```
## 3. Getting Started
### Run local server
```
  npm run start
```
### Build source
```
  npm run build
```
### Run the development server after the source build
```
  npm run serve
```
### Change the state management library(mobx <-> redux-thunk <-> redux-saga)
#### src/client/Root.tsx
```
// redux-saga
...
import { Provider  } from 'react-redux';
import configureStore from '../redux-saga/store';
const store = configureStore();

// redux-thunk
...
import { Provider  } from 'react-redux';
import store from '../redux-thunk/store';

// mobx
import { Provider } from 'mobx-react';
import Store from '../mobx/Store';
const store = new Store();
...
...
```
#### src/server/render.tsx
```
// redux-saga
import { Provider } from 'react-redux';
import configureStore from '../redux-thunk/store';
const store = configureStore();

// redux-thunk
import { Provider } from 'react-redux';
import store from '../redux-thunk/store';

// mobx
import { toJS } from 'mobx';
import { Provider } from 'mobx-react';
import Store from '../mobx/Store';
const store = new Store()
...
...
const render = async (location: string) => {
  ....
  return {
    html,
    // redux-thunk, redux-saga
    state: store.getState(),
    // mobx
    state: toJS(store),
    helmet,
  };
};
```

## 4. File Manifest
```
+-- src
|   +-- client
|       +-- Root.tsx
|   +-- components
|       +-- pages
|       +-- Menu.tsx
|   +-- redux-saga
|       +-- actions
|       +-- api
|       +-- reducers
|       +-- sagas
|       +-- store.ts
|   +-- redux-thunk
|       +-- reducers
|       +-- store.ts
|   +-- server
|       +-- render.tsx
|   +-- App.tsx
|   +-- index.tsx
```
## Copyright / End User License
MIT © [pjb0811](http://github.com/pjb0811)

## Contact Information
- [pjb0811@gmail.com](mailto:pjb0811@gmail.com)
- [http://github.com/pjb0811](http://github.com/pjb0811)

<!--
## Known Issues
## Troubleshooting
## Credit
## Change Log
-->
