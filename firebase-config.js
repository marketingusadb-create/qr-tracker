var QR_FIREBASE_CONFIG = {
  apiKey: "AIzaSyA6Mj4OyCzqAsk8iiT3JCcgOt3Gu1imOiE",
  authDomain: "qr-tracker-crm.firebaseapp.com",
  databaseURL: "https://qr-tracker-crm-default-rtdb.firebaseio.com",
  projectId: "qr-tracker-crm",
  storageBucket: "qr-tracker-crm.firebasestorage.app",
  messagingSenderId: "1085744853871",
  appId: "1:1085744853871:web:9a9f8413ee352ca55cae9a"
};

firebase.initializeApp(QR_FIREBASE_CONFIG, "qrTracker");
var QR_DB = firebase.firestore(firebase.app("qrTracker"));
var QR_AUTH = firebase.auth(firebase.app("qrTracker"));
