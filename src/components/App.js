import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllStudents from "./AllStudents";
import SingleStudent from "./SingleStudent";
import AllSubjects from "./AllSubjects";
import SingleSubject from "./SingleSubject";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/students" element={<AllStudents />} />
        <Route path="/students/:id" element={<SingleStudent />} />
        <Route path="/subjects" element={<AllSubjects />} />
        <Route path="/subjects/:id" element={<SingleSubject />} />
      </Routes>
    </Router>
  );
};

export default App;