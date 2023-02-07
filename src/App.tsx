import { useEffect, lazy, Suspense, Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import { onAuthStateChangeListener, createUserDocumentFromAuth } from './utils/firebase/firebase.utils';
import { useDispatch } from 'react-redux';
import { setUser } from './store/user/user.slice';
import Spinner from './components/spinner/spinner.component';
import GlobalStyle from './global.styles';
import { User } from "firebase/auth";

const Home = lazy(()=>import('./routes/home/home.component'));
const Navigation = lazy(()=>import('./routes/navigation/navigation.component'));
const Checkout = lazy(()=>import('./routes/checkout/checkout.component'));
const Shop = lazy(()=> import('./routes/shop/shop.component'));
const Authentication = lazy(()=>import('./routes/authentication/authentication.component'));

const App = ()=> {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener((user)=>{
      const createUser = async (user: User|null) => {
        if (!user) {return;}
        // console.log(user); // here can't get displayName from userAuth
        const userSnapshot = await createUserDocumentFromAuth(user, {});
        const userDoc = userSnapshot.data()
        dispatch(setUser(userDoc));
      };
      
      createUser(user);
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <Fragment>
      <GlobalStyle />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home/>} />
            <Route path='shop/*' element={<Shop />} />
            <Route path='auth' element={<Authentication />} />
            <Route path='checkout' element={<Checkout />} />
          </Route>
        </Routes>
      </Suspense>
    </Fragment>
  );
}

export default App;
