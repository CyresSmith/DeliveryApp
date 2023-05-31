import { FiLogOut } from 'react-icons/fi';

import { UserName } from './User.styled';
import Box from 'components/shared/Box';
import IconButton from 'components/Shared/IconButton';

import theme from 'theme';
import { useDispatch } from 'react-redux';
import { resetAuth } from 'redux/authSlice';
import { useLogoutMutation } from 'redux/authApi';
import { useEffect } from 'react';
import { Notify } from 'notiflix';

const User = ({ user }) => {
  const dispatch = useDispatch();

  const [logout, { isError, isLoading, isSuccess, error }] =
    useLogoutMutation();

  const handleLogout = async () => {
    await logout();
    dispatch(resetAuth());
  };

  useEffect(() => {
    if (isSuccess) {
      Notify.success('Successfully Logout');
    }

    if (isError) {
      Notify.failure(error.message);
    }
  }, [error, isError, isSuccess]);

  return (
    <Box display="flex" alignItems="center">
      <UserName>{user?.name}</UserName>

      <IconButton
        icon={FiLogOut}
        isLoading={isLoading}
        iconSize={15}
        disabled={isLoading}
        ariaLabel="logout"
        backgroundColor={theme.colors.background}
        onClick={handleLogout}
      />
    </Box>
  );
};

export default User;
