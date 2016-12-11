import {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLInt,
	GraphQLString,
	GraphQLList,
	GraphQLFloat
} from "graphql";

let Schema = (db) => {
	let store = {};
	let storeType = new GraphQLObjectType({
		name: "Store",
		fields: () => ({
			products: {
				type: new GraphQLList(productType),
				resolve: () => db.collection("products").find({}).toArray()
			}
		})
	});

	let productType = new GraphQLObjectType({
		name: "Product",
		fields: () => ({
			_id: { type: GraphQLString },
			ProductId: { type: GraphQLString },
			ProductName: { type: GraphQLString },
			Price: { type: GraphQLFloat }
		})
	});

	let schema = new GraphQLSchema({
		query: new GraphQLObjectType({
			name: "Query",
			fields: () => ({
				store: {
					type: storeType,
					resolve: () => store
				}
			})
		})
	});

	return schema;
};

export default Schema;