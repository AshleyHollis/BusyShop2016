import {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLInt,
	GraphQLString,
	GraphQLList,
	GraphQLFloat
} from "graphql";

let Schema = (db) => {

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
				products: {
					type: new GraphQLList(productType),
					resolve: () => db.collection("products").find({}).toArray()
				}
			})
		})
	});

	return schema;
};

export default Schema;