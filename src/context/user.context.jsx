import { createContext, useState, useEffect } from "react";
import { onAuthStateChangeListener, createUserDocumentFromAuth } from '../utils/firebase/firebase.utils'

export const UserContext = createContext({
    user: null,
    setUser: ()=>null,
});

export const UserProvider = ({ children }) => {
    const [ user, setUser ] = useState(null);
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