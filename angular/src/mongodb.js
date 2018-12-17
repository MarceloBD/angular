


module.exports = {
	saveEvent: function(event) {

	const MongoClient = require('mongodb').MongoClient;
	const assert = require('assert');

	// Connection URL
	const url = 'mongodb://admin:admin12@ds129454.mlab.com:29454/angular';

	// Database Name
	const dbName = 'angular';

	// Use connect method to connect to the server
	MongoClient.connect(url, function(err, client) {
	  //assert.equal(null, err);
	  console.log("Connected successfully to server");

	  const db = client.db(dbName);

	  var collection = db.collection('events');

	//  db.events.insert( { item: "card", qty: 15 } )

	  collection.insertOne(event)
	  client.close();
	});
}
}

