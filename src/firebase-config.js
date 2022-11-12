/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
 //import { initializeApp } from "firebase/app";
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: "AIzaSyB--S_-30yFnWIFP_o0RNNvj4Zot3BWKG8",
  authDomain: "friendlychat-cd0b7.firebaseapp.com",
  projectId: "friendlychat-cd0b7",
  storageBucket: "friendlychat-cd0b7.appspot.com",
  messagingSenderId: "820876562329",
  appId: "1:820876562329:web:f34f9648af03e0130e8d08"
};

// Initialize Firebase
//const app = initializeApp(Config);
export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}
