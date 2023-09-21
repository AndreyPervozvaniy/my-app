import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { routes } from "./routes";

function App() {
  const navBarItems = [
    { name: "About" },
    { name: "Programms" },
    { name: "Instructors" },
    { name: "Shedule" },
    { name: "Contacts" },
    { name: "News" },
  ];
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
