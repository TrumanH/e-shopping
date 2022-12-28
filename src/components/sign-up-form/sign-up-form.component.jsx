import { useState } from 'react';
import { createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import FormInput from '../../components/form-input/form-input.component';
import Button from '../../components/button/button.component';
import { SignUpContainer } from './sign-up-form.styles';

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

const SignUpForm = ()=> {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const resetFormFields = ()=> {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = formFields;
        if (password!==confirmPassword) {
            alert("passwords do not match!");
            return;
        }
        await createAuthUserWithEmailAndPassword(displayName, email, password);
        resetFormFields();
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
            <Button buttonType="google">Sign Up</Button>
        </form>
    </SignUpContainer>
    )
};

export default SignUpForm;