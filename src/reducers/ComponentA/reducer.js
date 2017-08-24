import { COMPONENT_A_SET_LOADING } from '../../actions/ComponentA/action_types';
import { BASIC_HTTP_GET_ACTION } from '../../actions/BasicHttp/action_types';

const INTIAL_STATE = {
	text: "Sample Component A Text Body",
	isLoading : false
};

export default function (state = INTIAL_STATE, action) {
 switch(action.type) {
	 case COMPONENT_A_SET_LOADING:
		 state.isLoading = action.data;
		 return { ...state };
	 case BASIC_HTTP_GET_ACTION:
	 		console.log(action);
	 		state.isLoading = false;
			state.text = JSON.stringify(action.data);
	 		return { ...state, message: action.data };
 }

 return state;
}
