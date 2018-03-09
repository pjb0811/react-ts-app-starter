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
  - redux-thunk
  - redux-logger
  - redux-promise-middleware
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
### Change the state management library(MobX <-> Redux)
#### src/client/Root.tsx
```
// redux
...
import { Provider  } from 'react-redux';
import store from '../redux/store';

// mobx
import { Provider } from 'mobx-react';
import Store from '../mobx/Store';
const store = new Store();
...
...
```
#### src/server/render.tsx
```
// redux
import { Provider } from 'react-redux';
import store from '../redux/store';

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
    // redux
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
|   +-- redux
|       +-- modules
|       +-- store.ts
|   +-- server
|       +-- render.tsx
|   +-- App.tsx
|   +-- index.tsx
```
## 5. Copyright / End User License
MIT © [pjb0811](http://github.com/pjb0811)

## 6. Contact Information
- [pjb0811@gmail.com](mailto:pjb0811@gmail.com)
- [http://github.com/pjb0811](http://github.com/pjb0811)
<!--
## 7. 알려진 버그 (Known Issues)
## 8. 문제 발생에 대한 해결책 (Troubleshooting)
## 9. 크레딧 (Credit)
## 10. 업데이트 정보 (Change Log)
-->
