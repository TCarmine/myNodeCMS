import { combineReducers } from 'redux';
import getArticles from './article_actions/get_articles.js';
import loadingArticles from './article_actions/loading_articles.js';

const reducers = combineReducers({
  articles: getArticles,
  loadArticles: loadingArticles,
});

export default reducers;