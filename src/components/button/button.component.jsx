import { BaseButton, GoogleSignInButton, InvertedButton, SpinnerButton } from './button.sytles'

const getButton = (buttonType = 'base') => ({
    base: BaseButton,
    google: GoogleSignInButton,
    inverted: InvertedButton,
}[buttonType])

const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
    const CustomButton = getButton(buttonType);
    return <CustomButton {...otherProps}>{isLoading ? <SpinnerButton /> : children}</CustomButton>;
};

export default Button;