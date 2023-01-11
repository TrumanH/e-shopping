import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
import { onAuthStateChangeListener, createUserDocumentFromAuth } from './utils/firebase/firebase.utils';
import { useDispatch } from 'react-redux';
import { setUser } from './store/user/user.slice';

const App = ()=> {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener((user)=>{
      const createUser = async (user) => {
        if (!user) {return;}
        // console.log(user); // here can't get displayName from userAuth
        const userSnapshot = await createUserDocumentFromAuth(user);
        const userDoc = userSnapshot.data()
        dispatch(setUser(userDoc));
      };
      
      createUser(user);
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home/>} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
