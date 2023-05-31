import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Notify } from 'notiflix';

import { useJsApiLoader, Autocomplete } from '@react-google-maps/api';

const MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

import { getCart, getUser } from 'redux/selectors';
import { resetCart } from 'redux/cartSlice';
import { useAddNewOrderMutation } from 'redux/ordersApi';

import { IoIosMail } from 'react-icons/io';
import { FaCheck } from 'react-icons/fa';
import { FaUserCircle, FaPhoneAlt, FaMapMarkedAlt } from 'react-icons/fa';

import { OrderForm as Form } from './OrderForm.styled';
import Button from 'components/shared/Button';
import Box from 'components/shared/Box';
import FormField from 'components/Shared/FormField';

const phoneRegExp =
  /^(\+?\d{1,3}\s?-?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{2}[\s.-]?\d{2}$/;

const ValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Must be at least 3 characters')
    .required('Required'),
  email: Yup.string().email('Must be valid email').required('Required'),
  phone: Yup.string()
    .matches(phoneRegExp, 'Phone in international format')
    .required('Required'),
  address: Yup.string()
    .min(8, 'Must be at least 8 characters')
    .max(30, 'Must be max 30 characters')
    .required('Required'),
});

const libraries = ['places'];

const OrderForm = ({ toggleModal, setDestination, ActiveSeller }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: MAPS_API_KEY,
    libraries,
  });

  const user = useSelector(getUser);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  const [UserData, setUserData] = useState({
    _id: '',
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  useEffect(() => {
    if (!user._id) {
      return;
    }

    const { _id, name, email, phone, address } = user;

    setUserData({ _id, name, email, phone, address });
  }, []);

  const [
    addNewOrder,
    { isLoading, isSuccess, isError, error, isUninitialized },
  ] = useAddNewOrderMutation();

  const handleChange = e => {
    setUserData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleNewOrderAdd = async data => {
    try {
      await addNewOrder(data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  useEffect(() => {
    if (!isUninitialized && isSuccess) {
      dispatch(resetCart());
      toggleModal();
    }

    if (!isUninitialized && isError) {
      Notify.failure(`What a shame! ${error.data.message}`, {
        showOnlyTheLastOne: true,
        position: 'right-top',
      });
    }
  }, [dispatch, error, isError, isSuccess, isUninitialized, toggleModal]);

  if (!isLoaded) {
    return <p />;
  }

  return (
    <Formik
      initialValues={UserData}
      validationSchema={ValidationSchema}
      onSubmit={({ name, email, phone, address }, { resetForm }) => {
        const items = () => {
          let items = [];
          cart.forEach(({ _id, name, price, count, total }) =>
            items.push({
              offer: _id,
              name,
              price,
              count,
              total,
            })
          );

          setDestination(address);

          return items;
        };

        const total = () => {
          let price = 0;
          cart.forEach(({ total }) => (price += total));

          return price;
        };

        const order = {
          client: {
            _id: UserData._id,
            name: UserData.name.trim(),
            email: UserData.email.trim(),
            phone: UserData.phone.trim(),
            address: UserData.address.trim(),
          },
          items: items(),
          totalPrice: total(),
          seller: ActiveSeller._id,
        };

        handleNewOrderAdd(order);
        resetForm();
      }}
    >
      <Form onChange={handleChange}>
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

        <Box mb={[5]}>
          <Autocomplete>
            <FormField
              type="address"
              label="Address"
              icon={FaMapMarkedAlt}
              placeholder="Address"
            />
          </Autocomplete>
        </Box>

        <Button
          type="submit"
          isLoading={isLoading}
          icon={FaCheck}
          disabled={Boolean(!cart.length) && !isLoading}
          children="Submit order"
          iconSize={20}
        />
      </Form>
    </Formik>
  );
};

export default OrderForm;
