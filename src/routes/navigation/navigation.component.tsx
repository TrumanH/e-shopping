import { Outlet } from 'react-router-dom';
import { Fragment } from 'react';
import { ReactComponent as Crownlogo } from '../../assets/crown.svg';
import { useSelector } from 'react-redux';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import DropDown from '../../components/cart-dropdown/card-dropdown.component';
import { Navi, LogoLink, NavLinksContainer, NavLink } from './navigation.styles';
import { RootState } from '../../store/store';


const Navigation = ()=> {
    const user = useSelector((state: RootState) => state.user.user);
    const isCartOpen = useSelector((state: RootState) => state.cart.isCartOpen);

    return (
      <Fragment>
        <Navi>
            <LogoLink to='/'>
                <Crownlogo />
            </LogoLink>
            <NavLinksContainer>
                <NavLink to='/shop'>SHOP</NavLink>
                {user ? (<NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>) 
                : (<NavLink to='/auth'>SIGN IN/SIGN UP</NavLink>)
                }
                {/* more anchor tag add below */}
                <CartIcon />
            </NavLinksContainer>
            {isCartOpen && <DropDown />}
        </Navi>
        <Outlet />
      </Fragment>
    );
  }

export default Navigation;