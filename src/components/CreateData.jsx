import React, { Component } from "react";
import axios from "axios";
class CreateData extends Component {
  state = {
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
  render() {
    const { name, venue, time, details, email, year } = this.state;
    return (
      <div className="container form-container create-data-component">
        <h2 className="center">Fill Data Here to Post</h2>
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
          <button className="btn waves-effect waves-light send" type="submit">
            Submit<i className="fa fa-paper-plane"></i>
          </button>
        </form>
      </div>
    );
  }
}

export default CreateData;
