import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const SingleSubject = () => {
  const { id } = useParams();
  const [singleSubject, setSingleSubject] = useState([]);

  useEffect(() => {
    let fetchSingleSubject = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:1338/api/subjects/${id}`
        );
        setSingleSubject(data);
        console.log(data);
      } catch (err) {
        console.error("Error loading subject details, ", err);
      }
    };
    fetchSingleSubject();
  }, [id]);

  return (
    <div className="container-fluid p-4">
      {singleSubject.map((single) => {
        return (
          <div key={single.subject_id}>
            <h3>{single.subject_name}</h3>
          </div>
        );
      })}
      {/* <form action="http://localhost:1338/api/students" method="DELETE"> */}
      <button className="btn btn-outline-primary">Delete</button>
      {/* </form> */}
    </div>
  );
};

export default SingleSubject;
