import { initializeApp } from "firebase/app";
import { getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signInWithRedirect, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
 } from "firebase/auth";
import { getFirestore,
   doc, 
   getDoc,
   setDoc,
   collection,
   writeBatch,
   query,
   getDocs,
   } from 'firebase/firestore';

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

export const signInWithGooglePopup = ()=> signInWithPopup(auth, provider);

export const db = getFirestore(); 

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batchWriter = writeBatch(db);
  objectsToAdd.forEach(object => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batchWriter.set(docRef, object);
  });
  await batchWriter.commit();
}

// unique function to get category related collection and documents
export const getCollectionAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  if ( querySnapshot.empty ) { throw new Error("can't get data, offline?"); }
  const categoriesMap = querySnapshot.docs.reduce((accm, doc)=>{
    const { title, items } = doc.data();
    accm[title.toLowerCase()] = items;
    return accm;
  }, {});
  return categoriesMap;
};

export const createUserDocumentFromAuth = async (userAuth, fields) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  // create user instance if not exist
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await setDoc(userDocRef, {displayName, email, createAt, ...fields});
    } catch (error) {
      // TODO: handle error
      console.log("Error when create user document:", error);
    }
  }
  return userSnapshot;
};

export const createAuthUserWithEmailAndPassword = async (displayName, email, password) => {
  if ((!displayName) || (!email) || (!password)) {
    return;
  }
  await createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => { 
    const { user } = userCredential;
    createUserDocumentFromAuth(user, {displayName})
  })
  .catch((error) => {
    if (error.code==='auth/email-already-in-use') {
      alert("can't create user, email already in use!")
    } else {
      console.log('user creation encountered an error:', error)
    }
  });
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if ((!email) || (!password)) {
    return;
  }
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async ()=> await signOut(auth);

export const onAuthStateChangeListener = (callback) => onAuthStateChanged(auth, callback);