import { Outlet, Link } from 'react-router-dom'
import { Fragment, useContext } from 'react'
import { ReactComponent as Crownlogo } from '../../assets/crown.svg'
import './navigation.styles.scss'
import { UserContext } from '../../context/user.context'
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import DropDown from '../../components/cart-dropdown/card-dropdown.component';
import { CartContext } from '../../context/cart.context'


const Navigation = ()=> {
    const { user } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    return (
      <Fragment>
        <div className='navigation'>
            <Link className='logo-container' to='/'>
                <Crownlogo className='logo' />
            </Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to='/shop'>SHOP</Link>
                {user ? (<Link className='nav-link' onClick={signOutUser}>SIGN OUT</Link>) : (<Link className='nav-link' to='/auth'>SIGN IN/SIGN UP</Link>)}
                {/* more anchor tag add below */}
                <CartIcon />
            </div>
            {isCartOpen && <DropDown />}
        </div>
        <Outlet />
      </Fragment>
    );
  }

export default Navigation;