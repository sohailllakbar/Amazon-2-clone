/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");



const functions = require("firebase-functions");
const admin = require("firebase-admin");
const stripe = require("stripe")('sk_test_51Ppb6n2Lvkln4ex30EngFBgmB0T8J9lowizt6BMucnWQxFDO1TKZCZYAGwLFqRBugBbwAWVjozEJs1GKbGZwlMzw00vhV0GCpX');

admin.initializeApp();

exports.createPaymentIntent = functions.https.onRequest(async (req, res) => {
  const { amount } = req.body;
  
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
    });
    res.status(200).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});


// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
