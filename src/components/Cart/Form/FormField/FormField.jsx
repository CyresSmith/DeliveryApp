import { ErrorMessage } from 'formik';

import { Input, Label, Error } from './FormField.styled';
import Box from 'components/shared/Box';
import theme from 'theme';

const FormField = ({ type, label, icon: Icon, placeholder }) => {
  return (
    <Box display="flex" alignItems="center" position="relative">
      <Box mr={[3]}>
        <Icon size={30} color={theme.colors.secondary} />
      </Box>
      <Box display="flex" flexDirection="column" alignItems="flex-start">
        <Label htmlFor={type}>{label}</Label>
        <Input id={type} name={type} type={type} placeholder={placeholder} />
        <ErrorMessage name={type} component={Error} />
      </Box>
    </Box>
  );
};

export default FormField;
