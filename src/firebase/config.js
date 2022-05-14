import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC2MwFBmSz7dBh1TQZ_isuuBmPEmCDmvs4",
    authDomain: "event-f7159.firebaseapp.com",
    projectId: "event-f7159",
    storageBucket: "event-f7159.appspot.com",
    messagingSenderId: "915109651176",
    appId: "1:915109651176:web:cbb32202ae66e6797f5f5d",
    measurementId: "G-5Q1XGCWT2N"
  };


  export const Firebase = firebase.initializeApp(firebaseConfig)