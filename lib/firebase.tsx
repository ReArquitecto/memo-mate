import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyC0w6hGuAlbyk_zTJ0w6neBEcd44kcEA-U",
    authDomain: "memo-mate-a87fa.firebaseapp.com",
    projectId: "memo-mate-a87fa",
    storageBucket: "memo-mate-a87fa.appspot.com",
    messagingSenderId: "318297138444",
    appId: "1:318297138444:web:5dd6e8dcc80edf678a5529",
    measurementId: "G-SPE9HNBQ7P"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();