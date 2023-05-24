import Box from 'components/shared/Box';

import UserNavigation from './UserNavigation';

import User from './User/User';

const token = 123;

const UserPanel = () => {
  return (
    <Box ml="auto" display="flex" alignItems="center">
      {token === '' ? <UserNavigation /> : <User />}
    </Box>
  );
};

export default UserPanel;
