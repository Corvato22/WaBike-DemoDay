// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAkL_1P-M0ntwccJ5AKBYbU91HzyjCTDnY",
    authDomain: "wabikeapp.firebaseapp.com",
    projectId: "wabikeapp",
    storageBucket: "wabikeapp.appspot.com",
    messagingSenderId: "481773439939",
    appId: "1:481773439939:web:ad277c2119bda4bfe08b76",
    measurementId: "G-84G3NQF48B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
const db = getFirestore();
// const analytics = getAnalytics(app);
// Configuración de authentication
export {
    app,
    google,
    facebook,
    db
}