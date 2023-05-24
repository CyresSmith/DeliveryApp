import { AiFillShop } from 'react-icons/ai';
import { HiShoppingCart } from 'react-icons/hi';

import { Nav, Link } from './Navigation.styled';
import Logo from './Logo';

// import { useSelector } from 'react-redux';
// import { getAuth } from 'redux/selectors';

const Navigation = () => {
  // const { token } = useSelector(getAuth);

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
          <Link to="/cart">
            <HiShoppingCart /> Cart
          </Link>
        </li>
      </ul>
    </Nav>
  );
};

export default Navigation;
