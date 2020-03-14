import React, { Component } from "react";
import axios from "axios";
import Flip from "react-reveal/Flip";
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
          <Flip key={post.id} bottom>
            <div className="cadets-div" key={post.id}>
              <p>
                id: <span>{post.id}</span>
              </p>
              <hr />
              <p>
                Name: <span>{post.name}</span>
              </p>
              <hr />
              <p>
                Venue: <span>{post.venue}</span>
              </p>
              <hr />
              <p>
                Date:{" "}
                <span>
                  {post.date === null ? "Date Unavailable" : post.date}
                </span>
              </p>
              <hr />
              <p>
                Time: <span>{post.time}</span>
              </p>
              <hr />
              <p>
                Details: <span>{post.details}</span>
              </p>
              <hr />
              <p>
                Email: <span>{post.email}</span>
              </p>
              <hr />
              <p>
                Year: <span>{post.year}</span>
              </p>
            </div>
          </Flip>
        );
      })
    ) : (
      <h3 className="center">Getting Data.....</h3>
    );
    return <div className="container displayData">{list}</div>;
  }
}

export default GetData;
