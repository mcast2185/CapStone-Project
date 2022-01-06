import React from "react";
import ReactDOM from "react-dom";
import { Provider} from "react-redux";
import { applyMiddleware, createStore } from '@reduxjs/toolkit';
import { BrowserRouter } from "react-router-dom";


import App from "./components/app";
import reducer from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducer);

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
};

document.addEventListener("DOMContentLoaded", main);