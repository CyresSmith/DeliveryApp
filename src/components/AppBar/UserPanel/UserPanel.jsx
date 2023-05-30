import { useSelector } from 'react-redux';

import { getAuth } from 'redux/selectors';

import Box from 'components/shared/Box';
import UserNavigation from './UserNavigation';
import User from './User/User';

const UserPanel = () => {
  const auth = useSelector(getAuth);

  return (
    <Box ml="auto" display="flex" alignItems="center">
      {!auth.user._id || !auth.accessToken ? (
        <UserNavigation />
      ) : (
        <User user={auth.user} />
      )}
    </Box>
  );
};

export default UserPanel;
