import AppDispatcher from "../AppDispatcher";
import {ActionTypes} from "../Constants";

let ServerActions = {
	receiveProducts(products) {
		console.log("2. In ServerActions");
		AppDispatcher.dispatch({
			actionType: ActionTypes.RECEIVE_PRODUCTS,
			products
		});
	}
};

export default ServerActions;