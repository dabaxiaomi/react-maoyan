import React, { Component } from "react";
import "./MovieItems.scss";

export default class MovieItems extends Component {
  constructor(props) {
    super(props);
    this.state={
      movie:
    }
  }
async componentDidMount(){
  await console.log({...this.props})
}
  renderItems() {
    return this.props.data.movieList.map(data => {
      return (
        <div
          className="item"
          data-id="1218029"
          data-bid="dp_wx_home_movie_list"
        >
          <div className="main-block">
            <div className="avatar" sort-flag>
              <div className="default-img-bg"></div>
            </div>
            <div className="mb-outline-b content-wrapper">
              <div className="column content">
                <div className="box-flex movie-title">
                  <div className="title line-ellipsis">{data.nm}</div>
                </div>
                <div className="detail column">
                  <div className="score line-ellipsis">
                    <span className="score-suffix">观众评价</span>
                    <span className="grade"> {data.sc} </span>
                  </div>
                  <div className="actor line-ellipsis">主演: {data.star} </div>
                  <div className="show-info line-ellipsis">{data.showInfo}</div>
                </div>
              </div>
              <div className="button-block" data-id="1218029">
                <div className="btn">
                  <span className="fix" data-bid="dp_wx_home_movie_btn">
                    {(data.globalReleased && "购买") || "预售"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }
  render() {
    return <div>666</div>;
  }
}
