import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getMovies } from "../../redux/actions";
import { Toast } from 'antd-mobile'
import _ from 'loadsh'

import BScroll from "better-scroll";
import "./Hot.scss";
// import MovieList from "./MovieList";

class Hot extends Component {
  constructor() {
    super();
    this.state = {
      moviesList: []
    };
  }

  async componentDidMount() {
    await this.props.getMovies();
    this.setState({ moviesList: this.props.movies.movieList });
    let count = 0;
    const scroll = new BScroll(".container", {
      pullUpLoad: {
        threshold: 40 //距离底部40是开始执行加载
      }
    })

     scroll.on('pullingUp',() =>{
        const movieIds = this.props.movies.movieIds.slice(12)
        console.log(movieIds)
        const ids = _.chunk(movieIds , 10)

        if( count == ids.length ){
            scroll.finishPullUp()
            // function showToast() {
                Toast.info('没有更多数据了...', 1);

            //   }

            return
        }

        if( count < ids.length ){
            //数据请求
          
            // this.showLoading()
            // console.log(ids)
            this.showLoading()
            this.setState( {
                movies: this.props.movies.movieList
            })
            this.props.getComingMovies( ids[count].join(','))
            
         
        }
        scroll.finishPullUp()
        setTimeout(() => {
            this.hideLoading()
        }, 1000);
        count++
    })
    }

    showLoading = () => {
        document.querySelector('.hide').setAttribute('class','show')
    }
    hideLoading = () => {
        document.querySelector('.show').setAttribute('class','hide')
    
    
  }
  renderMovieList() {
    return this.state.moviesList.map(val => (
      <li key={val.id}>
        <div className="cont-left">
          <img src={val.img.replace("w.h", "120.128")} alt="" />{" "}
        </div>
        <div className="cont-rig">
          <p>{val.nm}</p>
          <span className="audis">
            观众评 <i className="score">{val.sc}</i>
          </span>
          <span className="main-star"> 主演：{val.star}</span>
          <span className="cinema">{val.showInfo}</span>
        </div>
        <div className="btn-box">
          <button className="btn">购票</button>
        </div>
      </li>
    ));
  }
  render() {
    return (
      <div className="content-box">
        <ul className="content">{this.renderMovieList()}</ul>
        <div className="hide"></div>
      </div>
    );
  }
}

export default connect(
  state => state.moviesReducer,
  dispatch => bindActionCreators({ getMovies }, dispatch)
)(Hot);
