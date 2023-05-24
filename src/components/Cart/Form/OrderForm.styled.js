import styled from 'styled-components';
import theme from 'theme';
import { Form } from 'formik';

export const OrderForm = styled(Form)`
  display: flex;
  flex: 20%;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding: ${theme.space[5]} ${theme.space[4]};
`;
