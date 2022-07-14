// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_apiKey,
//     authDomain: process.env.REACT_APP_authDomain,
//     projectId: process.env.REACT_APP_projectId,
//     storageBucket: process.env.REACT_APP_storageBucket,
//     messagingSenderId: process.env.REACT_APP_messagingSenderId,
//     appId: process.env.REACT_APP_appId,
// };

const firebaseConfig = {
    apiKey: "AIzaSyAKDpCtLScFDlN3vQnkjpJz6u2H6LjctFc",
    authDomain: "fir-authentication-64a14.firebaseapp.com",
    projectId: "fir-authentication-64a14",
    storageBucket: "fir-authentication-64a14.appspot.com",
    messagingSenderId: "819811671346",
    appId: "1:819811671346:web:aa888b2d25870105a7cb2b",
    measurementId: "G-1W9DNDZ15L"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth
const auth = getAuth(app);
export default auth;
