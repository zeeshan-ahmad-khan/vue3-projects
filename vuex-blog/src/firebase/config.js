import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAVEsobf0mrc6VwzIb-a5zksCX5BNmLkkY",
    authDomain: "all-auth-36e3b.firebaseapp.com",
    projectId: "all-auth-36e3b",
    storageBucket: "all-auth-36e3b.appspot.com",
    messagingSenderId: "893357444015",
    appId: "1:893357444015:web:26f92727b6a3bafb3bfd5a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };