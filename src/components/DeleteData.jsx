import React, { Component } from "react";
import axios from "axios";
class DeleteData extends Component {
  render() {
    let id;
    let status;
    const handleDelete = e => {
      e.preventDefault();
      axios
        .delete(`https://ecell.nitrr.ac.in/events/cadets/${id}/`)
        .then(res => {
          status = res.status;
        })
        .catch(err => {
          console.log(err);
        });
      if (status !== 400 || status !== 405) {
        alert("Data Deleted Successfully!");
      }
    };
    const handleChange = e => {
      e.preventDefault();
      id = e.target.value;
    };

    return (
      <div className="container form-container delete-component">
        <h2 className="center">
          <span style={{ color: "#e53935" }}>Delete</span> Data
        </h2>
        <form>
          <p>Enter the id to delete:</p>
          <input type="text" onChange={handleChange} />
          <button
            className="btn waves-effect waves-light"
            onClick={handleDelete}
          >
            Delete Data
            <i className="fas fa-trash-alt"></i>
          </button>
        </form>
      </div>
    );
  }
}

export default DeleteData;
