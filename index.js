// Dependencies
const express = require('express');      //web application framework for nodejs
const bodyparser = require('body-parser'); //parse incoming request body

// Configuration
const app = express();
app.use(bodyparser.json());

// Webhook route
app.post('/webhook', (req, res) => {
	const data = req.body;

	// Code the task you want to achieve with @data
	// Read the v2 api documentation of dialogflow : https://dialogflow.com/docs/fulfillment
	// Using the v2 will become mandatory, Google wrote a guide to migrate from v1 to v2 as v2 is officially released

	const response = {
		fulfillmentText: "Your webhook works fine !",
	}
	res.json(response);
});
