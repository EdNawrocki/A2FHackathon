// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";              // for login

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBT-SIs3KyfSGvrIqA9A9DVfQCPNzlOrDo",
    authDomain: "a2f-hackathon.firebaseapp.com",
    projectId: "a2f-hackathon",
    storageBucket: "a2f-hackathon.appspot.com",
    messagingSenderId: "628533309721",
    appId: "1:628533309721:web:9e82ba544381340cc6d588",
    measurementId: "G-41C8PN7C7V"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize services
export const auth = getAuth();          // track our authorizations