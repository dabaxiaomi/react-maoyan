import request from './request'
import {GET_MOVIES } from './actionType'
export const getMovies = () => {
  return async dispatch => {
      const result = await request({
        url: '/ajax/movieOnInfoList',
        params: {
          token: ''
        }
      })
      // console.log(result)
      dispatch({
        type: GET_MOVIES,
        payload: result.data 
      })
  }
}