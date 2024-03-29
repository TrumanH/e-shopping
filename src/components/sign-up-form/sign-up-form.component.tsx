import { useState,FormEvent, ChangeEvent } from 'react';
import { createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import FormInput from '../../components/form-input/form-input.component';
import Button, { BUTTON_TYPES } from '../button/button.component';
import { SignUpContainer } from './sign-up-form.styles';
import { AuthError, AuthErrorCodes } from 'firebase/auth';

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

const SignUpForm = ()=> {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const resetFormFields = ()=> {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = formFields;
        if (password!==confirmPassword) {
            alert("passwords do not match!");
            return;
        }
        try {
            await createAuthUserWithEmailAndPassword(displayName, email, password);
            resetFormFields();
        } catch (error) {
            switch ((error as AuthError).code) {
                case AuthErrorCodes.EMAIL_EXISTS: alert("The email already in use!"); break;
                default: console.log(error);
            }
        }
    };

    return ( 
    <SignUpContainer>
        <span>
            <h2>Sign up with email and password</h2>
        </span>
        <form onSubmit={handleSubmit}>
            <FormInput
                label="Display Name"
                type="text"
                required
                onChange={handleChange}
                name="displayName"
                value={displayName} 
            />
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
            <FormInput 
                label="Confirm Password"
                type="password" 
                name="confirmPassword" 
                required 
                onChange={handleChange} 
                value={confirmPassword}
            />
            <Button buttonType={BUTTON_TYPES.base}>Sign Up</Button>
        </form>
    </SignUpContainer>
    )
};

export default SignUpForm;