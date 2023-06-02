import { ImUserPlus } from 'react-icons/im';
import { RiLoginBoxFill } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { getMediatype } from 'redux/selectors';
import { UserNav, Link } from './UserNavigation.styled';

const UserNavigation = ({ toggleMobileMenu }) => {
  const mediaType = useSelector(getMediatype);

  const handleMenuClose = () => {
    if (toggleMobileMenu) {
      toggleMobileMenu();
    }
  };

  return (
    <UserNav mediaType={mediaType}>
      <li>
        <Link to="/login" onClick={handleMenuClose}>
          <RiLoginBoxFill />
          Login
        </Link>
      </li>
      <li>
        <Link to="/register" onClick={handleMenuClose}>
          <ImUserPlus />
          Registration
        </Link>
      </li>
    </UserNav>
  );
};

export default UserNavigation;
