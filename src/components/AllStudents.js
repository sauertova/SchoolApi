import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./form.css";

const AllStudents = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    let fetchStudents = async () => {
      try {
        const { data } = await axios.get("http://localhost:1338/api/students");
        setStudents(data);
        console.log(data);
      } catch (err) {
        console.error("Error fetching students, ", err);
      }
    };

    fetchStudents();
  }, []);

  return (
    <>
      <div className="container-fluid p-4">
        <Navbar />
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {students.map((student) => {
            return (
              <div className="col" key={student.student_id}>
                <div className="card text-center h-100">
                  <div className="card-body">
                    <div className="card-title">
                      <h5>
                        {student.fname} {student.lname}
                      </h5>
                    </div>
                    <p>{student.email}</p>
                    <Link
                      to={`/students/${student.student_id}`}
                      className="btn btn-outline-primary"
                    >
                      View Student
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <form action="http://localhost:1338/api/students" method="POST">
        <div className="container form">
          <div className="form row mb-3">
            <input type="text" name="fname" placeholder="First Name" />
          </div>
          <div className="form row mb-3">
            <input type="text" name="lname" placeholder="Last Name" />
          </div>
          <div className="form row mb-3">
            <input type="text" name="email" placeholder="Email" />
          </div>
          <div className="form row mb-3">
            <input type="text" name="birthdate" placeholder="Birthdate" />
          </div>
          <button className="btn btn-outline-primary">Add Student</button>
        </div>
      </form>
    </>
  );
};

export default AllStudents;
