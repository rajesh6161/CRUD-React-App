import React, { Component } from "react";
import axios from "axios";
class Post extends Component {
  state = {
    id: 57,
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
    // const data = {
    //   name: "test2",
    //   venue: "test2",

    //   time: "test3",
    //   details: "test2",

    //   email: "test@test.com",
    //   year: "2020"
    // };
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
    if (this.state.status !== 404 || this.state.status !== 405) {
      this.setState({
        id: this.state.id + 1
      });
    }
  };

  render() {
    console.log(this.state.status);

    const { name, venue, time, details, email, year } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.changeHandler}
              placeholder="name"
            />
          </div>
          <div>
            <input
              type="text"
              name="venue"
              value={venue}
              onChange={this.changeHandler}
              placeholder="venue"
            />
          </div>
          <div>
            <input
              type="text"
              name="time"
              value={time}
              onChange={this.changeHandler}
              placeholder="time"
            />
          </div>
          <div>
            <input
              type="text"
              name="details"
              value={details}
              onChange={this.changeHandler}
              placeholder="details"
            />
          </div>
          <div>
            <input
              type="text"
              name="email"
              value={email}
              onChange={this.changeHandler}
              placeholder="email"
            />
          </div>
          <div>
            <input
              type="text"
              name="year"
              value={year}
              onChange={this.changeHandler}
              placeholder="year"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        <button onClick={this.updateData}>Update</button>
        <button onClick={this.delete}>Delete</button>
      </div>
    );
  }
}

export default Post;
