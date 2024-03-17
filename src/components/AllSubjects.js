import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const AllSubjects = () => {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    let fetchSubjects = async () => {
      try {
        const { data } = await axios.get("http://localhost:1338/api/subjects");
        setSubjects(data);
        console.log(data);
      } catch (err) {
        console.error("Error fetching subjects, ", err);
      }
    };

    fetchSubjects();
  }, []);

  return (
    <div className="container">
      <Navbar />
      {subjects.map((subject) => {
        return (
          <div key={subject.subject_id}>
            <h3>
              {subject.subject_id}. {subject.subject_name}
            </h3>
            <Link
              to={`/subjects/${subject.subject_id}`}
              className="btn btn-outline-primary"
            >
              View Subject
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default AllSubjects;
