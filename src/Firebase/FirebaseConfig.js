// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4z9mkgxUdx7yQvgASd2bHdS4U-WC5Ki4",
  authDomain: "glasses-authentication-857d4.firebaseapp.com",
  projectId: "glasses-authentication-857d4",
  storageBucket: "glasses-authentication-857d4.appspot.com",
  messagingSenderId: "469117911417",
  appId: "1:469117911417:web:80c4038b6655a48eb52fa8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth