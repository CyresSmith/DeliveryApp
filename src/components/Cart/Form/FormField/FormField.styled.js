import styled from 'styled-components';
import theme from 'theme';
import { Field } from 'formik';

export const Label = styled.label`
  position: absolute;
  bottom: 40px;
  font-size: ${theme.fontSizes.s};
  margin-bottom: ${theme.space[1]};
  color: ${theme.colors.white};
`;

export const Input = styled(Field)`
  font-size: ${theme.fontSizes.m};
  padding: ${theme.space[3]};
  border: ${theme.borders.none};
  border-radius: ${theme.radii.normal};
  background-color: ${theme.colors.white};
  width: 220px;

  ::placeholder {
    font-family: ${theme.fonts.body};
    color: ${theme.colors.secondary};
  }
`;

export const Error = styled.p`
  display: inline;
  position: absolute;
  top: calc(${theme.space[3]} + 34px);
  right: 0;
  font-size: ${theme.fontSizes.m};
  color: red;
`;
