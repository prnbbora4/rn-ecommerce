// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyASkjxzTWASUzxmYKAlPGQasF8X3IWTNJw",
    authDomain: "rn-ecommerce-c7f9b.firebaseapp.com",
    projectId: "rn-ecommerce-c7f9b",
    storageBucket: "rn-ecommerce-c7f9b.appspot.com",
    messagingSenderId: "935136567545",
    appId: "1:935136567545:web:e76498f87c418d8a2bc228"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


