import express from 'express';
import { MongoClient } from 'mongodb';

let MongoURL = 'mongodb://AshleyHollis:blueisgood2001@ds052819.mlab.com:52819/busyshop2016';
let app = express()

app.use(express.static('public'));

let db;
MongoClient.connect(MongoURL, (err, database) => {
    if (err) throw err;

    db = database;
    app.listen(3000, () => console.log('listening on port 3000'));
});

app.get("/data/products", (req, res) => {
    db.collection("products").find({}).toArray((err, products) => {
        if (err) throw err;
        
        res.json(products);
    });
});