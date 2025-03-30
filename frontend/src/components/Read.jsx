/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Read() {
  const [data, setData] = useState();
  const [error, setError] = useState("");

  const getData = async () => {
    const response = await fetch("http://localhost:5000/api/user");

    const result = await response.json();

    if (!response.ok) {
      console.log(result.error);
      setError(result.error);
    }

    if (response.ok) {
      setData(result);
    }
  }

  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:5000/api/user/${id}`, {
      method : "DELETE",
    });

    const result = response.json();

    if (!response.ok) {
      console.log(result.error);
      setError(result.error);
    }

    if (response.ok) {
      setError("Delete Successfully");

      setTimeout(() => {
        setError("")
        getData()
      }, 1000);
    }
  }

  useEffect(() => {
    getData();

  }, [])

  console.log(data);


  return (
    <div className="container my-2">

      {error && <div className="alert alert-warning alert-dismissible fade show" role="alert">{error}</div>}

      <h2 className="text-center p-4 text-white ">All Data</h2>

      <div className="row text-center">
        {data?.map((ele) => (
          <div key={ele._id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title mb-3">Name : {ele.name}</h5>
                <h6 className="card-subtitle mb-2">Email : {ele.email}</h6>
                <p>Age : {ele.age}</p>
                <div className="mt-auto d-flex justify-content-around">
                  <a href="#" className="card-link" onClick={() => handleDelete(ele._id)}>
                    Delete
                  </a>
                  <Link to={`/${ele._id}`} className="card-link">
                    Edit
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Read;