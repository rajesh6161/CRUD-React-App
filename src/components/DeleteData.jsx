import React, { Component } from "react";
import axios from "axios";
class DeleteData extends Component {
  render() {
    let id;
    const handleDelete = e => {
      axios
        .delete(`https://ecell.nitrr.ac.in/events/cadets/${id}/`)
        .then(res => {
          console.log(res.status);
        })
        .catch(err => {
          console.log(err);
        });
    };
    const handleChange = e => {
      e.preventDefault();
      id = e.target.value;
    };
    // const clicky = () => {
    //   console.log(id);
    // };
    return (
      <div className="container form-container delete-component">
        <h2 className="center">Delete Data</h2>
        <form>
          <p>Enter the id to delete:</p>
          <input type="text" onChange={handleChange} />
          <button
            className="btn waves-effect waves-light"
            onClick={handleDelete}
          >
            Delete Data
          </button>
        </form>
      </div>
    );
  }
}

export default DeleteData;
