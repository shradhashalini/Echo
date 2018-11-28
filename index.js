'use strict';

const {
  dialogflow,
  Suggestions
} = require('actions-on-google');
const functions = require('firebase-functions');

const app = dialogflow({debug: true});

app.intent('Default Fallback Intent', (conv) => {
    conv.ask('Please repeat');
});

app.intent('Bathroom', (conv) => {
    conv.ask('Hi, what do you wanna talk about?');
    conv.ask(new Suggestions(['fashion tips', 'celebrity news']));
});

/*
'use strict';

// Import the Dialogflow module from the Actions on Google client library.
const {dialogflow} = require('actions-on-google');

// Import the firebase-functions package for deployment.
// const functions = require('firebase-functions');

// Instantiate the Dialogflow client.
const app = dialogflow({debug: true});

// Handle the Dialogflow intent named 'favorite color'.
// The intent collects a parameter named 'color'.
app.intent('Bathroom', (conv, {record}) => {
    // const bathroomResult = 0;
    // Respond with the user's lucky number and end the conversation.
    conv.close('Your bathroom visit is fine.');
});
*/

const express = require('express'); 
const bodyParser = require('body-parser'); 
const server = express(); 
server.use(bodyParser.json()); 
server.post('/hook', app);
server.listen(3000, () => console.log('Server listening on port 3000.'))
