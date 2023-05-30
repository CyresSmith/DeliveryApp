import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { resetAuth, setAuth } from 'redux/authSlice';
import { useVerifyQuery } from 'redux/authApi';
import { setAuthHeader, clearAuthHeader } from 'redux/axiosBaseQuery';
import { getAuth } from 'redux/selectors';

import Box from 'components/shared/Box';

const Verify = () => {
  const { token } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, isLoading, error, isError, isSuccess } = useVerifyQuery(token);

  const [Message, setMessage] = useState('Verification page');

  const auth = useSelector(getAuth);

  useEffect(() => {
    if (!token || auth.accessToken) {
      return;
    }

    if (isSuccess) {
      const { user, accessToken, refreshToken } = data;

      dispatch(setAuth({ user, accessToken, refreshToken }));
      setAuthHeader(accessToken);
      navigate('/');
    }

    if (isError) {
      setMessage(error.message);
    }
  }, [
    auth.accessToken,
    data,
    dispatch,
    error,
    isError,
    isSuccess,
    navigate,
    token,
  ]);

  return (
    <Box variant="container" as="section">
      <Box variant="section">
        <p>{Message}</p>
      </Box>
    </Box>
  );
};

export default Verify;
