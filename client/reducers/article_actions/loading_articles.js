import { LOADING_ARTICLES } from '../../actions/actions';

export default function loadingArticles(state = true, action) {
  switch (action.type) {
    case LOADING_ARTICLES:
      return action.payload;
  }
  return state;
}