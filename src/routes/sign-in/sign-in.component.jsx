import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'


const SignIn = ()=> {

    const LogGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        createUserDocumentFromAuth(response.user)
    };

    return (
        <div>
            <h1>The sign-in page.</h1>
            <button onClick={LogGoogleUser}>
                Sign in with Google Popup 
            </button>
        </div>
    );
}

export default SignIn