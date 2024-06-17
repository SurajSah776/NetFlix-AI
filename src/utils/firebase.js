// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBeBFIAhVorcZ5Ut1p9530rmslClJzx7zY",
    authDomain: "netflixai-f2caf.firebaseapp.com",
    projectId: "netflixai-f2caf",
    storageBucket: "netflixai-f2caf.appspot.com",
    messagingSenderId: "933555519545",
    appId: "1:933555519545:web:f352ffa5f9ddab7e22cde8",
    measurementId: "G-BMX4GG6E5S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);