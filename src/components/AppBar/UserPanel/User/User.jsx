import { useDispatch } from 'react-redux';
// import { Notify } from 'notiflix';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import { FiLogOut } from 'react-icons/fi';

import { UserName } from './User.styled';
import Box from 'components/shared/Box';
import Button from 'components/shared/Button';
import IconButton from 'components/Shared/IconButton';

// import { useUserLogOutMutation } from 'redux/userAPI';
// import { setAuth } from 'redux/authSlice';
// import { authInitialState } from 'redux/authSlice';
// import { clearAuthHeader } from 'redux/axiosBaseQuery';
// import { contactsApi } from 'redux/contactsAPI';

// import { getAuth } from 'redux/selectors';

const user = { name: 'Ivan' };

const isLoading = false;

const User = () => {
  // const dispatch = useDispatch();
  // const { user } = useSelector(getAuth);

  // const [userLogOut, { isError, isLoading, isSuccess }] =
  //   useUserLogOutMutation();

  // const handleLogout = () => {
  //   userLogOut();
  // };

  // useEffect(() => {
  //   if (isSuccess) {
  //     dispatch(setAuth(authInitialState));
  //     dispatch(contactsApi.util.resetApiState());
  //     clearAuthHeader();
  //     Notify.info(`Successfully log out`);
  //   }

  //   if (isError) {
  //     Notify.failure(`What a shame! Some problems happend.`);
  //   }
  // }, [dispatch, isError, isSuccess]);

  return (
    <Box display="flex" alignItems="center">
      <UserName>{user?.name}</UserName>

      <IconButton
        icon={FiLogOut}
        isLoading={isLoading}
        iconSize={15}
        disabled={isLoading ? true : false}
        ariaLable="logout"
        backgroundColor="secondary"
        // onClick={handleLogout}
      />
    </Box>
  );
};

export default User;
