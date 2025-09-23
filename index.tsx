// //src/index.tsx
// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import "./index.css";
// import "./i18n"; // 👈 i18n config import

// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );






// src/index.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./i18n"; // i18n config import
import i18n from "i18next";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

// Watch language change and set direction dynamically
i18n.on("languageChanged", (lng) => {
  const dir = lng === "ar" ? "rtl" : "ltr";
  document.documentElement.dir = dir;
});

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
