import { createContext, useEffect, useReducer } from "react";
import { onAuthStateChangeListener, createUserDocumentFromAuth } from '../utils/firebase/firebase.utils'

export const UserContext = createContext({
  user: null,
  setUser: ()=>null,
});

const User_Action_Types = {
    SET_USER: "set_user",
};

const InitUserState = {
    user: null
};

export const userReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case User_Action_Types.SET_USER: 
      return {...state, user: payload};
    default:
      throw new Error("Unhandled action type: ", type);
  }
};

export const UserProvider = ({ children }) => {
    const [{ user }, dispatch ] = useReducer(userReducer, InitUserState);
    const setUser = (user) => {
      dispatch({type: User_Action_Types.SET_USER, payload: user});
    }
    
    const value = {user, setUser};
    useEffect(() => {
        const unsubscribe = onAuthStateChangeListener((user)=>{
        console.log("listener:", user);
        setUser(user);
        if (user) {
            createUserDocumentFromAuth(user);
        }
        });

        return unsubscribe;
    }, []);
     
    return (<UserContext.Provider value={value}>{children}</UserContext.Provider>);
};