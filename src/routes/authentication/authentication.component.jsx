import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import './authentication.sytles.scss' 

const Authentication = ()=> {

    return (
        <div className='authentication-container'>
            <div className='sign-in-container'>
                <SignInForm/>
            </div>
            <div className='sign-up-container'>
                <SignUpForm />
            </div>
        </div>
    );
}

export default Authentication;