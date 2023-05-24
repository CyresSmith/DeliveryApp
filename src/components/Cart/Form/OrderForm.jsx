import { Formik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

import { IoIosMail } from 'react-icons/io';
import { FaCheck } from 'react-icons/fa';
import { FaUserCircle, FaPhoneAlt, FaMapMarkedAlt } from 'react-icons/fa';

import FormField from './FormField';
import { OrderForm as Form } from './OrderForm.styled';
import Button from 'components/shared/Button';
import Box from 'components/shared/Box';
import { useState } from 'react';

const ValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Must be at least 3 characters')
    .required('Required'),
  email: Yup.string().email('Must be valid email').required('Required'),
  phone: Yup.string().required('Required'),
  adress: Yup.string().required('Required'),
});

const initialValues = {
  name: '',
  email: '',
  phone: '',
  adress: '',
};

const OrderForm = ({ OrderItems, totalPrice }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ValidationSchema}
      onSubmit={({ name, email, phone, adress }, { resetForm }) => {
        const order = {
          number: nanoid(),
          client: {
            name: name.trim(),
            email: email.trim(),
            phone: phone.trim(),
            adress: adress.trim(),
          },
          items: OrderItems,
          totalPrice,
        };

        console.log(order);

        resetForm();
      }}
    >
      <Form>
        <Box mb={[5]}>
          <FormField
            type="name"
            label="Name"
            icon={FaUserCircle}
            placeholder="Name"
          />
        </Box>

        <Box mb={[5]}>
          <FormField
            type="email"
            label="Email"
            icon={IoIosMail}
            placeholder="mail@mail.com"
          />
        </Box>

        <Box mb={[5]}>
          <FormField
            type="phone"
            label="Phone"
            icon={FaPhoneAlt}
            placeholder="mail@mail.com"
          />
        </Box>

        <Box mb={[5]}>
          <FormField
            type="adress"
            label="Adress"
            icon={FaMapMarkedAlt}
            placeholder="Adress"
          />
        </Box>

        <Button
          type="submit"
          //   isLoading={isLoading}
          icon={FaCheck}
          //   disabled={isLoading ? true : false}
          children="Submit order"
          iconSize={20}
        />
      </Form>
    </Formik>
  );
};

export default OrderForm;
