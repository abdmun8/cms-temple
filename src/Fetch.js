import axios from 'axios';
import { API_URL } from './Global';

export function post(path, data, headers, successF, errorF) {
  try {
    let apiUrl = API_URL + path;
    axios({
      method: 'post',
      url: apiUrl,
      data: data,
      headers: headers
    })
      .then(function(response) {
        if (!response.data.response) {
          window.localStorage.setItem('persist:cms-temple', null);
          window.location = '/sign-in';
        }
        successF(response.data);
      })
      .catch(function(error) {
        errorF(error);
      });
  } catch (e) {
    console.log(e);
  }
}

export function get(path, headers, successF, errorF) {
  try {
    let apiUrl = API_URL + path;
    axios({
      method: 'get',
      url: apiUrl,
      headers: headers
    })
      .then(function(response) {
        if (!response.data.response) {
          window.localStorage.setItem('persist:cms-temple', null);
          window.location = '/sign-in';
        }
        // console.log(response);
        successF(response.data);
      })
      .catch(function(error) {
        errorF(error);
      });
  } catch (e) {
    console.log(e);
  }
}

export default {
  get,
  post
};
