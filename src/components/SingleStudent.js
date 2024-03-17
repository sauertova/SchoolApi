import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const SingleStudent = () => {
  const { id } = useParams();
  const [singleStudent, setSingleStudent] = useState([]);

  useEffect(() => {
    let fetchSingleStudent = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:1338/api/students/${id}`
        );
        setSingleStudent(data);
        console.log(data);
      } catch (err) {
        console.error("Error loading student details, ", err);
      }
    };
    fetchSingleStudent();
  }, [id]);

  return (
    <div className="d-flex justify-content-center p-5">
      <div>
        <div className="container-fluid p-4 text-center">
          {singleStudent.map((single) => {
            return (
              <div key={single.student_id}>
                <h5>
                  {single.fname} {single.lname}
                </h5>
                <p>{single.email}</p>
                <p>{single.birthdate}</p>
              </div>
            );
          })}
          {/* <form action="http://localhost:1338/api/students"
method="DELETE"> */}
          <button className="btn btn-outline-primary">Delete</button>
          {/* </form> */}
        </div>
      </div>
    </div>
  );
};

export default SingleStudent;
