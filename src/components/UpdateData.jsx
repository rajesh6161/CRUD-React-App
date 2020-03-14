import React, { Component } from "react";
import axios from "axios";

class UpdateData extends Component {
  state = {
    id: 39,
    name: "",
    venue: "",

    time: "",

    details: "",

    email: "",
    year: "",
    status: ""
  };
  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("https://ecell.nitrr.ac.in/events/cadets/?format=json", this.state)
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  };

  updateData = () => {
    axios
      .put(
        `https://ecell.nitrr.ac.in/events/cadets/${this.state.id}/`,
        this.state
      )
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  delete = e => {
    e.preventDefault();

    axios
      .delete(`https://ecell.nitrr.ac.in/events/cadets/${this.state.id}/`)
      .then(res => {
        console.log(res.status);
        this.state.status = res.status;
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    console.log(this.state.status);
    const { name, venue, time, details, email, year } = this.state;
    return (
      <div className="container">
        <form onSubmit={this.submitHandler}>
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
