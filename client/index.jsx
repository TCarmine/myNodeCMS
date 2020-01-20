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
			<Article />
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

ReactDOM.render(
  <App />,
  document.querySelector('.react-container'));