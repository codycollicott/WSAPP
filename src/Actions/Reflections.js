import axios from "axios";
// import { consoleError } from "../Utils/Helpers/Format";

import {
  FETCH_ALL_REFLECTIONS_PENDING,
  FETCH_ALL_REFLECTIONS_SUCCESS,
  FETCH_ALL_REFLECTIONS_FAILED,
  UPDATE_REFLECTION_PENDING,
  UPDATE_REFLECTION_SUCCESS,
  UPDATE_REFLECTION_FAILED
} from '../Utils/ActionTypes';

/**
@function getReflections
@param newLang :: string
@explain takes the language as props and submits them to a put request
@explain (to set the application language to user preferance)
@return with fires  UPDATE_USER_LANGUAGE_SUCCESS || UPDATE_USER_LANGUAGE_ERROR
*/
export const getReflections = () => dispatch => {
  dispatch({
    type: FETCH_ALL_REFLECTIONS_PENDING
  });
  return axios.get('http://localhost:3000/reflections')
    .then(res => {
      console.log(res);
      return dispatch({
        type: FETCH_ALL_REFLECTIONS_SUCCESS,
        data: res.data.transactions
      });
    })
    .catch(err => {
      console.log(err);
      return dispatch({
        type: FETCH_ALL_REFLECTIONS_FAILED,
        data: err
      });
    });
};

export const updateReflection = (reflectionId, payload) => dispatch => {
  dispatch({
    type: UPDATE_REFLECTION_PENDING
  });
  return axios.put(
      `http://localhost:3000/reflections/${reflectionId}`, payload
    )
    .then(res => {
      console.log(res);
      dispatch({
        type: UPDATE_REFLECTION_SUCCESS
      });
      dispatch(getReflections());
    })
    .catch(err => {
      console.log(err);
      return dispatch({
        type: UPDATE_REFLECTION_FAILED,
        data: err
      });
    });
};
