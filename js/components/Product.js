import React from "react";
import Relay from "react-relay";

class Product extends React.Component {
	render() {
		let {product} = this.props;
		return (
			<li key={product.ProductId}>
				<p>{product.ProductName}</p>
			</li>
		);
	}
}

Product = Relay.createContainer(Product, {
	fragments: {
		product: () => Relay.QL`
		fragment on Product { 
			ProductId,
			ProductName,
			Price
		}`
	}
});

export default Product;