import axios from 'axios';

// Exporting our actions
export const LOADING_ARTICLES = 'LOADING_ARTICLES';
export const GET_ARTICLES = 'GET_ARTICLES';

// An action to check if the artciles are loaded accepts true or false
export function loadingArticles(loading) {
  return {
    type: LOADING_ARTICLES,
    payload: loading,
  };
}

// This will get the articles from the API
export function fetchArticles(data) {
  return {
    type: GET_ARTICLES,
    payload: data,
  };
}

// This is a redux thunk that will fetch our model data
export function articlesFetchData(url) {
  return (dispatch) => {
    const request = axios.get(url);
    request.then((response) => {
      dispatch(loadingArticles(false));
      dispatch(fetchArticles(response.data.article));
    });
  };
}