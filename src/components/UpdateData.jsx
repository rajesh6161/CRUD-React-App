import React, { Component } from "react";
import axios from "axios";
import Jump from "react-reveal/Jump";

class UpdateData extends Component {
  state = {
    id: "",
    name: "",
    venue: "",

    time: "",

    details: "",

    email: "",
    year: ""
  };
  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  updateData = e => {
    const { name, venue, time, details, email, year } = this.state;
    const datas = {
      name: name,
      venue: venue,
      time: time,
      details: details,
      email: email,
      year: year
    };
    e.preventDefault();
    axios
      .put(`https://ecell.nitrr.ac.in/events/cadets/${this.state.id}/`, datas)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { id, name, venue, time, details, email, year } = this.state;

    return (
      <div className="container form-container update-component">
        <Jump>
          <h2 className="center">
            <span style={{ color: "green" }}>Update</span> Data
          </h2>
        </Jump>

        <form>
          <div>
            <p>id:</p>
            <input
              type="text"
              name="id"
              value={id}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <p>Name:</p>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <p>Venue:</p>
            <input
              type="text"
              name="venue"
              value={venue}
              onChange={this.changeHandler}
            />
          </div>

          <div>
            <p>Time:</p>
            <input
              type="text"
              name="time"
              value={time}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <p>Details:</p>
            <input
              type="text"
              name="details"
              value={details}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <p>Email:</p>
            <input
              type="text"
              name="email"
              value={email}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <p>Year:</p>
            <input
              type="text"
              name="year"
              value={year}
              onChange={this.changeHandler}
            />
          </div>

          <button
            className="btn waves-effect waves-light updateBtn"
            onClick={this.updateData}
          >
            Update
            <i className="fa fa-paper-plane"></i>
          </button>
        </form>
      </div>
    );
  }
}

export default UpdateData;
