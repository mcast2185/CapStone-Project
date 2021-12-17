import React from "react";
import ReactDOM from "react-dom";
import { Provider} from "react-redux";
import { applyMiddleware, createStore } from '@reduxjs/toolkit';
import { BrowserRouter } from "react-router-dom";
// import thunk from "redux-thunk";

import App from "./components/app";
import reducer from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(
  reducer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : DevTools.instrument()
);

import "./style/main.scss";

function main() {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);

// export default store;