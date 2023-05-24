import { Formik } from 'formik';
import * as Yup from 'yup';

import { IoIosMail } from 'react-icons/io';
import { RiLoginBoxFill } from 'react-icons/ri';
import { FaUserCircle, FaPhoneAlt, FaMapMarkedAlt } from 'react-icons/fa';

import FormField from './FormField';
import { OrderForm as Form } from './OrderForm.styled';
import Button from 'components/shared/Button';
import Box from 'components/shared/Box';

const ValidationSchema = Yup.object().shape({
  email: Yup.string().email('Must be valid email').required('Required'),
  password: Yup.string()
    .min(8, 'Must be at least 8 characters')
    .required('Required'),
});

const OrderForm = () => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={ValidationSchema}
      onSubmit={({ email, password }, { resetForm }) => {
        const order = {
          email: email.trim(),
          password: password.trim(),
        };

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
          icon={RiLoginBoxFill}
          //   disabled={isLoading ? true : false}
          children="Submit order"
          iconSize={20}
        />
      </Form>
    </Formik>
  );
};

export default OrderForm;
