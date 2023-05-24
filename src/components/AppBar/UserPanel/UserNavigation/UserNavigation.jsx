import { ImUserPlus } from 'react-icons/im';
import { RiLoginBoxFill } from 'react-icons/ri';
import { UserNav, Link } from './UserNavigation.styled';

const UserNavigation = () => {
  return (
    <UserNav>
      <li>
        <Link to="/login">
          <RiLoginBoxFill />
          Login
        </Link>
      </li>
      <li>
        <Link to="/register">
          <ImUserPlus />
          Registration
        </Link>
      </li>
    </UserNav>
  );
};

export default UserNavigation;
