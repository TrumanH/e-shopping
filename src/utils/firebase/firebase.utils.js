import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

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

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: 'select_account',
});

export const signInWithGooglePopup = ()=> signInWithPopup(auth, googleProvider);
export const signInWithGoogleDirect = ()=> signInWithRedirect(auth, googleProvider);

export const db = getFirestore(); 

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  // create user instance if not exist
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await setDoc(userDocRef, {displayName, email, createAt});
    } catch (error) {
      // TODO: handle error
      console.log("Error when create user document:", error);
    }
  }
};