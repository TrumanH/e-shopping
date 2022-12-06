import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth'
import { auth, signInWithGooglePopup, signInWithGoogleDirect, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'


const SignIn = ()=> {
    // Mount/Update, useEffect
    useEffect(()=>{
        const fetchRedirectRes = async ()=> {
            const { user } = await getRedirectResult(auth);
            console.log(user);
            if (user) {
                createUserDocumentFromAuth(user);
            }
        }
        fetchRedirectRes();
    }, []);

    const LogGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
    };

    return (
        <div>
            <h1>The sign-in page.</h1>
            <button onClick={LogGoogleUser}>
                Sign in with Google Popup 
            </button>
            <br/>
            <button onClick={signInWithGoogleDirect}>
                Direct to sign in with google
            </button>
        </div>
    );
}

export default SignIn