import Box from 'components/shared/Box';

import LoginForm from 'components/Login/LoginForm';

const Login = () => {
  return (
    <Box variant="container" as="section">
      <Box variant="section">
        <LoginForm />
      </Box>
    </Box>
  );
};

export default Login;
