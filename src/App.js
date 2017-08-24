import React, { Component } from 'react';
import ComponentA from './components/ComponentA/ComponentA.js';
import ComponentB from './components/ComponentB/ComponentB.js';
import logo from './logo.svg';
import './App.css';

//Redux
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

//Routing
import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';

//Reducers
import rootReducer from './reducers/rootReducer';

const hist = createHistory();
const historyMiddleware = routerMiddleware(hist);
var middleware = [reduxThunk, historyMiddleware];

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
);

class App extends Component {
  render() {
    return (
			<Provider store={store}>
				<ConnectedRouter history={hist}>
					<div>
		        <Route exact path="/" component={ComponentA}/>
						<Route path="/other" component={ComponentB}/>
					</div>
	    	</ConnectedRouter>
			</Provider>
    );
  }
}

export default App;
