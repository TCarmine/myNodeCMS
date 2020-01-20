import React, { Component } from 'react';
import { connect } from 'react-redux';
// Remember our thunk this is where we will need to make use of it
import { articlesFetchData } from '../actions/actions.js';
// We gonna use lodash to map over our articles object
import _ from 'lodash';

class Article extends Component {
  constructor(props) {
    super(props);
    // Bind our render article to function so we can use it in the render method
    this.renderArticle = this.renderArticle.bind(this)
  }

  // Fetch articles when component is mounted
  componentDidMount() {
    const API_URL = 'http://localhost:3000/api/articles/?listArticle';
    // Only in development setting some delay to simulate a real world request
    setTimeout(() => { this.props.fetchArticle(API_URL); }, 1000);
  }
// Function to render our recipe
  renderArticle() {
    return _.map(this.props.article, article => {
      // Check if there is an image to be displayed
      const img = article.image ? article.image.filename : '';
      // Get the html for our recipe ingredients
      function createMarkupForArticles() {
        if (article.articleList) {
          return {
            __html: article.articleList,
          };
        } else {
          return;
        }
      };
      // Make sure we show only published articles
      if (article.state = "published") {
        return (
          <div key={article._id}>
            <h1>{article.title}</h1>
            <img style={{ width: '300px', height: '300px' }} src={img} />
            <p>{article.Post}</p>
          </div>  
        );
      }
   });
}
  render() {
    // If data is still loading
    if (this.props.loading) {
      return (
        <div>
          <h1>LOADING...</h1>
        </div>
      );
    }
    // Show article once data is loaded
    return (
        <div>
        {this.renderArticle()}
        </div>
      );
  };
};

function mapStateToProps(state, ownProps) {
  // Things return here are showing in props for Recepie
  return {
    articles: state.articles,
    loading: state.loadArticles,
  };
}

// anything returned from here will end up in the props
const mapDispatchToProps = dispatch => ({
  // Our thunk will be mapped to this.props.fetchRecipe
  fetchArticle: (url) => dispatch(articlesFetchData(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Article);