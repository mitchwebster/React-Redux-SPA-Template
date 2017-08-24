import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import ComponentAReducer from './ComponentA/reducer';

const rootReducer = combineReducers({
	 componentA: ComponentAReducer,
	 router: routerReducer
});

 export default rootReducer;
