import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Notify } from 'notiflix';

import { Autocomplete } from '@react-google-maps/api';

import { getCart } from 'redux/selectors';
import { useAddNewOrderMutation } from 'redux/ordersApi';
import { resetCart } from 'redux/cartSlice';

import { IoIosMail } from 'react-icons/io';
import { FaCheck } from 'react-icons/fa';
import { FaUserCircle, FaPhoneAlt, FaMapMarkedAlt } from 'react-icons/fa';

import FormField from './FormField';
import { OrderForm as Form } from './OrderForm.styled';
import Button from 'components/shared/Button';
import Box from 'components/shared/Box';

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
  adress: Yup.string()
    .min(8, 'Must be at least 8 characters')
    .max(30, 'Must be max 30 characters')
    .required('Required'),
});

const initialValues = {
  name: '',
  email: '',
  phone: '',
  adress: '',
};

const OrderForm = ({ toggleModal, setDestination, ActiveSeller }) => {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  const [
    addNewOrder,
    { isLoading, isSuccess, isError, error, isUninitialized },
  ] = useAddNewOrderMutation();

  const hendleNewOrderAdd = async data => {
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
      // navigate('/');
    }

    if (!isUninitialized && isError) {
      console.log(error);

      Notify.failure('What a shame! Order add error!', {
        showOnlyTheLastOne: true,
        position: 'right-top',
      });
    }
  }, [dispatch, isError, isSuccess, isUninitialized, toggleModal]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ValidationSchema}
      onSubmit={({ name, email, phone, adress }, { resetForm }) => {
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

          setDestination(adress);

          return items;
        };

        const total = () => {
          let price = 0;
          cart.forEach(({ total }) => (price += total));

          return price;
        };

        const order = {
          client: {
            name: name.trim(),
            email: email.trim(),
            phone: phone.trim(),
            adress: adress.trim(),
          },
          items: items(),
          totalPrice: total(),
          seller: ActiveSeller._id,
        };

        hendleNewOrderAdd(order);
        resetForm();
      }}
    >
      <Form>
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
          {/* <Autocomplete> */}
          <FormField
            type="adress"
            label="Adress"
            icon={FaMapMarkedAlt}
            placeholder="Adress"
          />
          {/* </Autocomplete> */}
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
