import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBCaXuSz-LKDt8gnkOrEi8lrsDZ58BdsvI",
    authDomain: "vue-chatapp-ad549.firebaseapp.com",
    projectId: "vue-chatapp-ad549",
    storageBucket: "vue-chatapp-ad549.appspot.com",
    messagingSenderId: "690772343204",
    appId: "1:690772343204:web:0171f08a681fce93692931",
    measurementId: "G-D7XH2GMV22"
};

const app = initializeApp(firebaseConfig)

const projectAuth = getAuth(app)

const projectDb = getFirestore(app);

export {
    projectDb,
    projectAuth
}