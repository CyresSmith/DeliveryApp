import { PropTypes } from 'prop-types';
import theme from 'theme';

import StyledButton from './IconButton.styled';

const IconButton = ({
  icon: Icon = null,
  iconSize,
  type = 'button',
  disabled = false,
  ariaLable,
  round,
  onClick,
  backgroundColor = `${theme.colors.background}`,
  color = `${theme.colors.primary}`,
}) => {
  return (
    <StyledButton
      type={type}
      disabled={disabled}
      aria-labelledby={ariaLable}
      round={round}
      onClick={onClick}
      backgroundColor={backgroundColor}
      color={color}
    >
      {Icon && <Icon size={iconSize} />}
    </StyledButton>
  );
};

IconButton.propTypes = {
  icon: PropTypes.func.isRequired,
  iconSize: PropTypes.number.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  ariaLable: PropTypes.string.isRequired,
  round: PropTypes.bool,
};

export default IconButton;
