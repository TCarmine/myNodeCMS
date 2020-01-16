import { combineReducers } from 'redux';
import getArticles from './recipe_actions/get_articles.js';
import loadingArticles from './recipe_actions/loading_articles.js';

const reducers = combineReducers({
  articles: getArticles,
  loadArticles: loadingArticles,
});

export default reducers;