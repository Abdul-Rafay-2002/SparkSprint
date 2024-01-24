// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAJ1qd5V-schIWqaZLzPExI4rYXA4Jv4hs",
    authDomain: "sparksprint.firebaseapp.com",
    projectId: "sparksprint",
    storageBucket: "sparksprint.appspot.com",
    messagingSenderId: "269898460519",
    appId: "1:269898460519:web:c45380664c06a01d38d3c2",
    measurementId: "G-2BHLMSPWD4"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);


export default firebaseApp;