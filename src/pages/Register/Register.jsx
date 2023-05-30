import Box from 'components/shared/Box';

import RegisterForm from 'components/Register/RegisterForm';

const Register = () => {
  return (
    <Box variant="container" as="section">
      <Box variant="section">
        <RegisterForm />
      </Box>
    </Box>
  );
};

export default Register;
