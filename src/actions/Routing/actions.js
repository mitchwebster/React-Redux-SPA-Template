'use-strict';

import { push } from 'react-router-redux';

function changeRoute(path) {
	return function(dispatch) {
		dispatch(push(path));
  }
}

export {
	changeRoute
}
