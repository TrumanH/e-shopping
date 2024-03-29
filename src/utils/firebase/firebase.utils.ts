import { initializeApp } from "firebase/app";
import { 
  User,
  NextOrObserver,
  getAuth, 
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
   where,
   getDocs,
   } from 'firebase/firestore';
import { CategoryMap, ProductDetail } from '../../store/categories/categories.slice';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_Firebase_apiKey,
  authDomain: process.env.REACT_APP_Firebase_authDomain,
  projectId: process.env.REACT_APP_Firebase_projectId,
  storageBucket: process.env.REACT_APP_Firebase_storageBucket,
  messagingSenderId: process.env.REACT_APP_Firebase_messagingSenderId,
  appId: process.env.REACT_APP_Firebase_appId,
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

const db = getFirestore(); 

export type ObjectToAdd = {
  title: string;
};

// if want create data in firebase, write a script ultilize this function
export const addCollectionAndDocuments = async (collectionKey: string, objectsToAdd: ObjectToAdd[]) => {
  const collectionRef = collection(db, collectionKey);
  const batchWriter = writeBatch(db);
  objectsToAdd.forEach(obj => {
    const docRef = doc(collectionRef, obj.title.toLowerCase());
    batchWriter.set(docRef, obj);
  });
  await batchWriter.commit();
}

export const getProductDetail = async (category: string, id: string): Promise<ProductDetail[]> => {
  const productsRef = collection(db, 'products');
  const pid = parseInt(id!, 10);
  const q = query(productsRef, where("category", "==", category), where("id", "==", pid));
  const querySnapshot = await getDocs(q);
  if ( querySnapshot.empty ) { throw new Error("can't get data, offline?"); }
  const products:ProductDetail[] = querySnapshot.docs.map((doc) => {
    // doc.data() is never undefined for query doc snapshots
    const {category, id, name, title, price, imageUrl, desc} = doc.data();
    const p: ProductDetail = {category, id, name, title, price, imageUrl, desc};
    return p;
  });
  return products
};

// unique function to get categories related collection and documents and transfer to map
export const getCategoriesMap = async (): Promise<CategoryMap> => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  if ( querySnapshot.empty ) { throw new Error("can't get data, offline?"); }
  // TODO: use type CategoryMap
  const categoriesMap: CategoryMap = querySnapshot.docs.reduce((accm: CategoryMap, doc)=>{
    const { title, items } = doc.data();
    accm[title.toLowerCase()] = items;
    return accm;
  }, {});
  return categoriesMap; // i.e: {"hat": [{item0...}, {item1...}, {item2...}]}
};

export type AdditionalInformation = {
  displayName?: string;
};

export const createUserDocumentFromAuth = async (userAuth: User, fields: AdditionalInformation) => {
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

export const createAuthUserWithEmailAndPassword = async (displayName: string, email: string, password: string) => {
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

export const signInAuthUserWithEmailAndPassword = async (email: string, password: string) => {
  if ((!email) || (!password)) {
    return;
  }
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async ()=> await signOut(auth);

export const onAuthStateChangeListener = (callback: NextOrObserver<User>) => onAuthStateChanged(auth, callback);

// TODO: migrate user related operations into a particular redux saga file as 'src\store\user\user.saga.ts';