import React, { Component } from "react";
import MovieItems from "./MovieItems";
import "./MovieList.scss";

export default class MovieList extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  componentDidMount() {
    // console.log(this.props);
  }
  render() {
    return (
      <div className="tab-content">
        <div className="page n-hot active" data-hot=".n-hot" data-cid="c_dmLad">
          <div className="list-wrap">
            <div>
              <MovieItems data={this.props.data}></MovieItems>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
