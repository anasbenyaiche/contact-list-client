import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Card({ id, name, email, age, phone }) {
  const handleDelete = () => {
    axios.delete(`http://localhost:8000/user/${id}`);
  };
  return (
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">{email}</p>
        <p class="card-text">{age}</p>
        <p class="card-text">{phone}</p>
        <button onClick={handleDelete} class="btn btn-danger">
          Delete
        </button>

        <Link to={`/edit/${id}`}> Edit user</Link>
      </div>
    </div>
  );
}
