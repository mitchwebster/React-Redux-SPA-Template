'use-strict';

import { COMPONENT_A_SET_LOADING } from './action_types';

function setLoading(loadingStatus) {
	return function(dispatch) {
		dispatch({
			type: COMPONENT_A_SET_LOADING,
			data: loadingStatus
		});
	}
}

export {
	setLoading
}
