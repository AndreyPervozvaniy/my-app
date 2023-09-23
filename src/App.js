import React, { Suspense } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { routes } from "./routes";

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <Suspense>
                <route.element />
              </Suspense>
            }
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
