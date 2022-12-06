// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOJ9qYidRYS6nQ0KS-8_F3fb2TpVXQXh0",
  authDomain: "e-shop-35620.firebaseapp.com",
  projectId: "e-shop-35620",
  storageBucket: "e-shop-35620.appspot.com",
  messagingSenderId: "526411354117",
  appId: "1:526411354117:web:157f52a46d8d1a8dcd8c6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account',
});

export const SignInWithGooglePopup = ()=> signInWithPopup(auth, provider);