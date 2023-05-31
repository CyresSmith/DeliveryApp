import { useSelector } from 'react-redux';

import { AiFillShop } from 'react-icons/ai';
import { HiShoppingCart } from 'react-icons/hi';
import { MdOutlineHistoryEdu } from 'react-icons/md';

import { Nav, Link } from './Navigation.styled';
import Logo from './Logo';

import { getCart, getUser } from 'redux/selectors';

import Box from 'components/shared/Box';
import Badge from 'components/Shared/Badge';

const Navigation = () => {
  const cartItems = useSelector(getCart).length;
  const user = useSelector(getUser);

  return (
    <Nav>
      <ul>
        <li>
          <Logo />
        </li>
        <li>
          <Link to="/">
            <AiFillShop /> Shop
          </Link>
        </li>
        <li>
          <Box style={{ position: 'relative' }}>
            {cartItems !== 0 && <Badge number={cartItems} />}
            <Link style={{ position: 'relative' }} to="/cart">
              <HiShoppingCart /> Cart
            </Link>
          </Box>
        </li>
        <li>
          {user._id && (
            <Link to="/history">
              <MdOutlineHistoryEdu /> History
            </Link>
          )}
        </li>
      </ul>
    </Nav>
  );
};

export default Navigation;
