import React from "react";
import API from "../API";
import ProductStore from "../stores/ProductStore";

let _getAppState = () => {
	return { products: ProductStore.getAll() };
};

export default class Main extends React.Component {
	constructor(props) {
		super(props);

		this.state = _getAppState();
		this.onChange = this.onChange.bind(this);
	}
	componentDidMount() {
		API.getProducts();
		ProductStore.on("change", this.onChange);
	}
	componentWillUnmount() {
		ProductStore.removeListener("change", this.onChange);
	}
	onChange() {
		console.log("4. In the View");
		this.setState(_getAppState());
	}
	render() {
		let content = this.state.products.map(product => {
			return <li key={product.ProductId}>
				<p>{product.ProductName}</p>
			</li>;
		});
		return (
			<div>
				<h3>Products</h3>
				<ul>
					{content}
				</ul>

			</div>
		);
	}
}