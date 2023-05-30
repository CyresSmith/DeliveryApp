import styled from 'styled-components';
import { Form } from 'formik';

import theme from 'theme';

export const FormBox = styled(Form)`
  display: flex;
  flex: 20%;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  background-color: ${theme.colors.primary};
  padding: ${theme.space[5]};
  padding-top: ${theme.space[6]};
  width: 350px;
  border-radius: ${theme.radii.high};
`;
