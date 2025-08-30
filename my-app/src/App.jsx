import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Second from "./Components/Secondmiddle/Second.jsx";
import Enquiry from "./Components/Enquiry/Enquiry.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Enquiry/>} />
      </Routes>
    </Router>
  );
}

export default App;
