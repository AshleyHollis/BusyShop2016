import { get } from "jquery";
import ServerActions from "./actions/ServerActions";

let API = {
	getProducts() {
		console.log("1. In API.");

		get("/data/products").done(res => {
			ServerActions.receiveProducts(res);
		});
	}
};

export default API;