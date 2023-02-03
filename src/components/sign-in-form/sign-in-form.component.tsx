import { useState, FormEvent, ChangeEvent } from 'react';
import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils';
import { signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import FormInput from '../../components/form-input/form-input.component';
import Button, { BUTTON_TYPES } from '../button/button.component';
import { SignInContainer, ButtonContainer } from './sign-in-form.styles';
import { AuthError, AuthErrorCodes } from 'firebase/auth';


const defaultFormFields = {
    email: "",
    password: "",
};

const SignInForm = ()=> {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const resetFormFields = ()=> {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { email, password } = formFields;
        try {
            await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        } catch(error) {
            switch ((error as AuthError).code) {
                case AuthErrorCodes.INVALID_PASSWORD: alert("wrong password!"); break;
                case AuthErrorCodes.USER_DELETED: alert("no exist user associated with this email!"); break;
                default: console.log("uncatched error:", error);
            }
        };
    };

    const LogGoogleUser = async () => {
        await signInWithGooglePopup();
        // createUserDocumentFromAuth(user); // already registered in listener
    };

    return ( 
    <SignInContainer>
        <span>
            <h2>Already have an account? Sign in with email and password</h2>
        </span>
        <form onSubmit={handleSubmit}>
            <FormInput 
                label="Email"
                type="email" 
                name="email" 
                required 
                onChange={handleChange} 
                value={email}
            />
            <FormInput 
                label="Password" 
                type="password" 
                name="password" 
                required 
                onChange={handleChange} 
                value={password}
            />
            <ButtonContainer>
                <Button buttonType={BUTTON_TYPES.inverted}>Sign In</Button>
                <Button onClick={LogGoogleUser} buttonType={BUTTON_TYPES.google}>
                    Google Sign In
                </Button>
            </ButtonContainer>
        </form>
    </SignInContainer>
    )
};

export default SignInForm;