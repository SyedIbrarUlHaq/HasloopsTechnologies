// //src/App.js
// import React from "react";
// import "./App.css";
// import NotificationsPage from "./pages/NotificationsPages";

// function App() {
//   return <NotificationsPage />;
// }

// export default App;





// src/App.tsx
import React from "react";
import "./App.css";
import NotificationsPage from "./pages/NotificationsPages";
import { useTranslation } from "react-i18next";

const App: React.FC = () => {
  const { i18n } = useTranslation();
  const dir = i18n.language === "ar" ? "rtl" : "ltr";

  return (
    <div dir={dir}>
      <NotificationsPage />
    </div>
  );
};

export default App;
