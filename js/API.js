import { post } from "jquery";
import ServerActions from "./actions/ServerActions";

let API = {
	getProducts() {
		console.log("1. In API.");

		post("/graphql", {
			query: `{
  products {
    _id
    ProductId
    ProductName
    Price
  }
}`
		}).done(res => {
			ServerActions.receiveProducts(res.data.products);
		});
	}
};

export default API;