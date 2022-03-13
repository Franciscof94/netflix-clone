import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCawVP6GVA0xqxuWThJMrYWDlRZgqP29NA",
    authDomain: "netflixclone-804d4.firebaseapp.com",
    projectId: "netflixclone-804d4",
    storageBucket: "netflixclone-804d4.appspot.com",
    messagingSenderId: "801736297711",
    appId: "1:801736297711:web:f8379eca514b2d3c8f9f1a",
    measurementId: "G-JCDMEYKCZW"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()

export {auth}