import { useSelector } from 'react-redux';

import { getAuth } from 'redux/selectors';

import Box from 'components/shared/Box';
import UserNavigation from './UserNavigation';
import User from './User/User';
import theme from 'theme';

const UserPanel = ({ mediaType, toggleMobileMenu }) => {
  const auth = useSelector(getAuth);

  return (
    <Box
      ml="auto"
      mr={mediaType === 'tablet' ? theme.space[5] : 0}
      mb={mediaType === 'mobile' ? theme.space[5] : 0}
      display="flex"
      alignItems="center"
    >
      {!auth.user._id || !auth.accessToken ? (
        <UserNavigation toggleMobileMenu={toggleMobileMenu} />
      ) : (
        <User user={auth.user} mediaType={mediaType} />
      )}
    </Box>
  );
};

export default UserPanel;
