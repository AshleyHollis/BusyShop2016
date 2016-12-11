import React from "react";
import Relay from "react-relay";

import Product from "./Product"; 

class Main extends React.Component {
	render() {
		let content = this.props.store.products.map(product => {
			return <Product key={product._id} product={product}/>;
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

Main = Relay.createContainer(Main, {
	fragments: {
		store: () => Relay.QL`
		fragment on Store {
			products {
				_id,
				${Product.getFragment("product")}
			}
		}`
	}
});

export default Main;