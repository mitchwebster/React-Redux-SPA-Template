'use-strict';

import axios from 'axios';
import { BASIC_HTTP_GET_ACTION } from './action_types';

function basicGetRequest() {
	return function(dispatch) {
		axios.get('https://jsonplaceholder.typicode.com/posts/1').then(function(responseData){
			dispatch({
				type: BASIC_HTTP_GET_ACTION,
				data: responseData.data,
				error: false
			});
		}).catch((error) => {
	      console.log(error);
				dispatch({
					type: BASIC_HTTP_GET_ACTION,
					data: [],
					error: true
				});
	  });
  }
}

export {
	basicGetRequest
}
