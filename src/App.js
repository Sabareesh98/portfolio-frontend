import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import EntryPage from "./components/EntryPage";
import Portfolio from "./components/Portfolio";
import Cursor from "./components/Cursor";

function App() {
  const [entered, setEntered] = useState(false);

  return (
    <Router>
      <Cursor />

      <Routes>
        <Route
          path="/"
          element={
            entered ? (
              <Portfolio />
            ) : (
              <EntryPage onSuccess={() => setEntered(true)} />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
