import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Header from "./components/Header";
import store from "./store";
import { Provider } from "react-redux";
import "./index.css";
import Details from "./pages/Details.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <Provider store={store}>
    <Router>

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/details" element={<Details />} />
      
      </Routes>
    </Router>
    </Provider>
  </React.StrictMode>
);
