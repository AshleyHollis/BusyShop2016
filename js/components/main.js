import React from "react";
import API from "../API";

export default class Main extends React.Component {
	componentDidMount() {
		API.getProducts();
	}
	render() {
		return <h3>Hello JSX</h3>;
	}
}