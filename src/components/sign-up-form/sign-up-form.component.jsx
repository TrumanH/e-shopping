import { useState } from 'react';
import { CreateUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import FormInput from '../../components/form-input/form-input.component';
import Button from '../../components/button/button.component';
import './sign-up-form.styles.scss'

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

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = formFields;
        if (password!==confirmPassword) {
            alert("passwords do not match!");
            return;
        }
        await CreateUserWithEmailAndPassword(displayName, email, password);
    };

    return ( 
    <div className='sign-up-container'>
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
    </div>
    )
};

export default SignUpForm;