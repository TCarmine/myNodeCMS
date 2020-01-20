import { GET_ARTICLES } from './actions';

export default function getArticle(state = {}, action) {
  switch (action.type) {
    case GET_ARTICLES:
      return action.payload
  }
  return state;
}