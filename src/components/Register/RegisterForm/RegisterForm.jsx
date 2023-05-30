import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Notify } from 'notiflix';

import { useRegisterMutation } from 'redux/authApi';

import { IoIosMail } from 'react-icons/io';
import { FaCheck } from 'react-icons/fa';
import { MdPassword } from 'react-icons/md';
import { FaUserCircle, FaPhoneAlt, FaMapMarkedAlt } from 'react-icons/fa';

import { FormBox } from './RegisterForm.styled';

import FormField from 'components/Shared/FormField';
import Button from 'components/shared/Button';
import Box from 'components/shared/Box';
import { useNavigate } from 'react-router-dom';

const phoneRegExp =
  /^(\+?\d{1,3}\s?-?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{2}[\s.-]?\d{2}$/;

const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;

const ValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Must be at least 3 characters')
    .max(20, 'Must be max 20 characters')
    .required('Required'),
  email: Yup.string().email('Must be valid email').required('Required'),
  phone: Yup.string()
    .matches(phoneRegExp, 'Phone in international format')
    .required('Required'),
  adress: Yup.string()
    .min(8, 'Must be at least 8 characters')
    .max(30, 'Must be max 30 characters')
    .required('Required'),
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
  name: '',
  email: '',
  phone: '',
  adress: '',
  password: '',
};

const RegisterForm = ({ toggleModal, setDestination, ActiveSeller }) => {
  const [register, { isLoading, isSuccess, isError, error, isUninitialized }] =
    useRegisterMutation();

  const handleRegister = async user => {
    await register(user);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      navigate('/');

      Notify.success(
        'Registration was success! Verification email sent on your email. Please confirm!',
        {
          showOnlyTheLastOne: true,
          position: 'right-top',
        }
      );
    }

    if (isError) {
      console.error(error);
    }
  }, [error, isError, isSuccess, navigate]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ValidationSchema}
      onSubmit={({ name, email, phone, adress, password }, { resetForm }) => {
        const newUser = {
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          adress: adress.trim(),
          password: password.trim(),
        };

        console.log(
          '🚀 ~ file: RegisterForm.jsx:54 ~ RegisterForm ~ newUser:',
          newUser
        );

        handleRegister(newUser);

        if (isSuccess) {
          resetForm();
        }
      }}
    >
      <FormBox>
        <Box mb={[6]}>
          <FormField
            type="name"
            label="Name"
            icon={FaUserCircle}
            placeholder="Name"
          />
        </Box>
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
            type="phone"
            label="Phone"
            icon={FaPhoneAlt}
            placeholder="+380 00 000 00 00"
          />
        </Box>
        <Box mb={[6]}>
          <FormField
            type="adress"
            label="Adress"
            icon={FaMapMarkedAlt}
            placeholder="Adress"
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
          children="Register"
          iconSize={20}
        />
      </FormBox>
    </Formik>
  );
};

export default RegisterForm;
