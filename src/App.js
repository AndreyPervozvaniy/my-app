import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/pages/Main";
import Contacts from "./components/pages/Contacts";
import About from "./components/pages/About";
import Instructors from "./components/pages/Instructors";
import Programms from "./components/pages/Programms";
import Schedule from "./components/pages/Schedule";
import OurBelts from "./components/pages/OurBelts";
import OurAcademy from "./components/pages/OurAcademy";
import News from "./components/pages/News";
import NewsSlot from "./components/pages/NewsSlot";

import { routes } from "./routes";

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
