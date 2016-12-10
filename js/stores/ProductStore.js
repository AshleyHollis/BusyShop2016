import AppDispatcher from "../AppDispatcher";
import { ActionTypes } from "../Constants";
import { EventEmitter } from "events";

let _products = [];

class ProductStore extends EventEmitter {
	constructor(props) {
		super(props);

		AppDispatcher.register(action => {
			switch (action.actionType) {
				case ActionTypes.RECEIVE_PRODUCTS:
					console.log("3. In Store.");
					_products = action.products;
					this.emit("change");
					break;
				default:
			}
		});
	}

	getAll(){
		return _products;
	}
}

export default new ProductStore();