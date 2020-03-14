import React, { Component } from "react";
import axios from "axios";
class GetData extends Component {
  state = {
    datas: []
  };
  componentDidMount() {
    axios
      .get("https://ecell.nitrr.ac.in/events/cadets/")
      .then(res =>
        this.setState({
          datas: res.data
        })
      )
      .catch(err => console.log(err));
  }
  render() {
    const { datas } = this.state;
    const list = datas.length ? (
      datas.map(post => {
        return (
          <div className="cadets-div" key={post.id}>
            <p>
              id: <span>{post.id}</span>
            </p>
            <p>
              Name: <span>{post.name}</span>
            </p>
            <p>
              Venue: <span>{post.venue}</span>
            </p>
            <p>
              Date:{" "}
              <span>{post.date === null ? "Date Unavailable" : post.date}</span>
            </p>

            <p>
              Time: <span>{post.time}</span>
            </p>
            <p>
              Details: <span>{post.details}</span>
            </p>
            <p>
              Email: <span>{post.email}</span>
            </p>
            <p>
              Year: <span>{post.year}</span>
            </p>
          </div>
        );
      })
    ) : (
      <button className="loadingBtn"></button>
    );
    return <div className="container displayData">{list}</div>;
  }
}

export default GetData;
