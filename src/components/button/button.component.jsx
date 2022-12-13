import './button.sytles.scss'

const Button_Classes = {
    'google': 'google_sign_in',
    'inverted': 'inverted'
}

const Button = ({ children, buttonType, ...otherProps }) => {
    return (
        <button 
        className={`button-container ${Button_Classes[buttonType]}`}
        {...otherProps}
        >
            { children }
        </button>
    )
};

export default Button;