import { useState } from 'react';
import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils';
import { signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import FormInput from '../../components/form-input/form-input.component';
import Button from '../../components/button/button.component';
import './sign-in-form.styles.scss'

const defaultFormFields = {
    email: "",
    password: "",
  };

const SignInForm = ()=> {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const resetFormFields = ()=> {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = formFields;
        try {
            await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        } catch(error) {
            switch (error.code) {
                case 'auth/wrong-password': alert("wrong password!"); break;
                case 'auth/user-not-found': alert("no exist user associated with this email!"); break;
                default: console.log("uncatched error:", error);
            }
        };
    };

    const LogGoogleUser = async () => {
        await signInWithGooglePopup();
        // createUserDocumentFromAuth(user); // already registered in listener
    };

    return ( 
    <div className='sign-in-container'>
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
            <div className='buttons-container'>
                <Button>Sign In</Button>
                <Button type="button" onClick={LogGoogleUser} buttonType="google">
                    Google Sign In
                </Button>
            </div>
        </form>
    </div>
    )
};

export default SignInForm;