import { FiLogOut } from 'react-icons/fi';

import { UserName } from './User.styled';
import Box from 'components/shared/Box';
import IconButton from 'components/Shared/IconButton';

import theme from 'theme';

const user = { name: 'Ivan' };

const isLoading = false;

const User = () => {
  return (
    <Box display="flex" alignItems="center">
      <UserName>{user?.name}</UserName>

      <IconButton
        icon={FiLogOut}
        isLoading={isLoading}
        iconSize={15}
        disabled={isLoading ? true : false}
        ariaLable="logout"
        backgroundColor={theme.colors.background}
        // onClick={handleLogout}
      />
    </Box>
  );
};

export default User;
