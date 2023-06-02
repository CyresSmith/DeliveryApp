import { useSelector } from 'react-redux';

import { AiFillShop } from 'react-icons/ai';
import { HiShoppingCart } from 'react-icons/hi';
import { MdOutlineHistoryEdu } from 'react-icons/md';

import { Nav, NavList, NavItem, Link } from './Navigation.styled';

import { getCart, getUser, getMediatype } from 'redux/selectors';

import Box from 'components/shared/Box';
import Badge from 'components/Shared/Badge';

const Navigation = ({ mediaType, toggleMobileMenu }) => {
  const cartItems = useSelector(getCart).length;
  const user = useSelector(getUser);

  const handleMenuToggle = () => {
    if (toggleMobileMenu) {
      toggleMobileMenu();
    }
  };

  return (
    <Nav mediaType={mediaType}>
      <NavList mediaType={mediaType}>
        <NavItem mediaType={mediaType} onClick={handleMenuToggle}>
          <Link to="/">
            <AiFillShop /> Shop
          </Link>
        </NavItem>
        <NavItem mediaType={mediaType} onClick={handleMenuToggle}>
          <Link to="/cart">
            <Box style={{ position: 'relative' }}>
              {cartItems !== 0 && <Badge number={cartItems} />}
              <HiShoppingCart style={{ position: 'relative' }} />
            </Box>
            Cart
          </Link>
        </NavItem>
        <NavItem mediaType={mediaType} onClick={handleMenuToggle}>
          {user._id && (
            <Link to="/history">
              <MdOutlineHistoryEdu /> History
            </Link>
          )}
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Navigation;
