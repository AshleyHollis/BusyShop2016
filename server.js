import fs from "fs";
import express from "express";
import Schema from "./data/schema";
import GraphQLHTTP from "express-graphql";
import { MongoClient } from "mongodb";
import { graphql } from "graphql";
import { introspectionQuery } from "graphql/utilities";

let MongoURL = "mongodb://AshleyHollis:blueisgood2001@ds052819.mlab.com:52819/busyshop2016";
let app = express();

app.use(express.static("public"));

(async () => {
	let db = await MongoClient.connect(MongoURL);
	let schema = Schema(db);

	app.use("/graphql", GraphQLHTTP({
		schema,
		graphiql: true
	}));

	app.listen(3000, () => console.log("listening on port 3000"));

	let json = await graphql(schema, introspectionQuery);
	fs.writeFile("./data/schema.json", JSON.stringify(json, null, 2), err => {
		if (err) throw err;

		console.log("JSON schema created");
	});
})();