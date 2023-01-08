import { ButtonHTMLAttributes, FC } from 'react';
import { BaseButton, GoogleSignInButton, InvertedButton, SpinnerButton } from './button.sytles'

export enum BUTTON_TYPES {
    base = 'base',
    google = 'google',
    inverted = 'inverted',
};

const getButton = (buttonType = BUTTON_TYPES.base): typeof BaseButton => ({
    [BUTTON_TYPES.base]: BaseButton,
    [BUTTON_TYPES.google]: GoogleSignInButton,
    [BUTTON_TYPES.inverted]: InvertedButton,
}[buttonType])

export type ButtonProps = {
    buttonType?: BUTTON_TYPES,
    isLoading?: boolean,
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ children, buttonType, isLoading, ...otherProps }) => {
    const CustomButton = getButton(buttonType);
    return <CustomButton {...otherProps}>{isLoading ? <SpinnerButton /> : children}</CustomButton>;
};

export default Button;