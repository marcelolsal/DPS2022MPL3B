const admin = require("firebase-admin");
const { initializeApp, applicationDefault } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

var serviceAccount = require("../firebase.json");

initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = getFirestore();

module.exports = {
    db,
};