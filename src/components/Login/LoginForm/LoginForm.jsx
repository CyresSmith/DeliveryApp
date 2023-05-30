import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Notify } from 'notiflix';

import { useLoginMutation } from 'redux/authApi';

import { IoIosMail } from 'react-icons/io';
import { FaCheck } from 'react-icons/fa';
import { MdPassword } from 'react-icons/md';
import { FaUserCircle, FaPhoneAlt, FaMapMarkedAlt } from 'react-icons/fa';

import { FormBox } from './LoginForm.styled';

import FormField from 'components/Shared/FormField';
import Button from 'components/shared/Button';
import Box from 'components/shared/Box';
import { useNavigate } from 'react-router-dom';
import { setAuth } from 'redux/authSlice';
import { setAuthHeader } from 'redux/axiosBaseQuery';

const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;

const ValidationSchema = Yup.object().shape({
  email: Yup.string().email('Must be valid email').required('Required'),
  password: Yup.string()
    .min(8, 'Must be at least 8 characters')
    .max(20, 'Must be max 20 characters')
    .matches(
      passwordRegex,
      'Must be at least one capital letter and one number'
    )
    .required('Required'),
});

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = ({ toggleModal, setDestination, ActiveSeller }) => {
  const [login, { isLoading, isSuccess, isError, error, isUninitialized }] =
    useLoginMutation();

  const dispatch = useDispatch();

  const handleLogin = async userData => {
    const data = await login(userData);

    const { user, accessToken, refreshToken } = data.data;
    dispatch(setAuth({ user, accessToken, refreshToken }));
    setAuthHeader(accessToken);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      navigate('/');

      Notify.success('Login was success!', {
        showOnlyTheLastOne: true,
        position: 'right-top',
      });
    }

    if (isError) {
      console.error(error);
    }
  }, [error, isError, isSuccess, navigate]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ValidationSchema}
      onSubmit={({ email, password }, { resetForm }) => {
        const user = {
          email: email.trim(),
          password: password.trim(),
        };

        handleLogin(user);

        if (isSuccess) {
          resetForm();
        }
      }}
    >
      <FormBox>
        <Box mb={[6]}>
          <FormField
            type="email"
            label="Email"
            icon={IoIosMail}
            placeholder="mail@mail.com"
          />
        </Box>
        <Box mb={[6]}>
          <FormField
            type="password"
            label="password"
            icon={MdPassword}
            placeholder="********"
          />
        </Box>

        <Button
          type="submit"
          // isLoading={isLoading}
          icon={FaCheck}
          // disabled={!isLoading}
          children="Login"
          iconSize={20}
        />
      </FormBox>
    </Formik>
  );
};

export default LoginForm;
