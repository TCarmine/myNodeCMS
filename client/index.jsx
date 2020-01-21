import React from 'react'
import ReactDOM from 'react-dom';
import BerlinI from '../server/img/Berlin.jpg';
import { Provider } from 'react-redux';
// We will need to import this from redux to create our store and make use of the thunk
import { createStore, applyMiddleware } from 'redux';
// Dont forget to import redux thunk
import thunk from 'redux-thunk';
// Getting our combined reducers
import reducers from './reducers/reducers';
// And our Recipe component
import Article from './containers/Article';

const store = createStore(reducers, applyMiddleware(thunk));
// This will be the entry point of our app
const App = () => {
	return (
	// We will add our components here
<div>	
<div>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div class="container">
      <a class="navbar-brand" href="index.html">Start Bootstrap</a>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="about.html">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="post.html">Sample Post</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="contact.html">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>
 <div>
   <Article />
</div>
</div>
	);
};

ReactDOM.render(
	// We need to wrap our app in provider to make use of redux
	// Passing our store to the provider
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector('.react-container'));

