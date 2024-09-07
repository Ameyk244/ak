// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaTNH-Kdn8seqyDC1Sey694Q7nUzH7w5o",
  authDomain: "aqua-c4111.firebaseapp.com",
  databaseURL: "https://aqua-c4111-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "aqua-c4111",
  storageBucket: "aqua-c4111.appspot.com",
  messagingSenderId: "1063951158555",
  appId: "1:1063951158555:web:80b31b171e5f47654617be",
  measurementId: "G-SBJDHMSEYY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);