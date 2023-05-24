import { PropTypes } from 'prop-types';
import { StyledButton, ButtonText, Loader } from './Button.styled';
import { BiLoaderCircle } from 'react-icons/bi';

const Button = ({
  icon: Icon = null,
  iconSize,
  type = 'button',
  disabled = false,
  isLoading = false,
  children,
  onClick,
}) => {
  return (
    <StyledButton type={type} disabled={disabled} onClick={onClick}>
      {isLoading && Icon && (
        <Loader>
          <BiLoaderCircle size={iconSize} />
        </Loader>
      )}
      {!isLoading && Icon && <Icon size={iconSize} />}
      <ButtonText isIconThere={Icon}>{children}</ButtonText>
    </StyledButton>
  );
};

Button.propTypes = {
  icon: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  children: PropTypes.string.isRequired,
  iconSize: PropTypes.number,
};

export default Button;
