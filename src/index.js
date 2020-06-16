import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import store from "./redux/redux-store"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"

window.store = store
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
)
