import { LogoLink, LogoBox } from './Logo.styled';

import { MdDeliveryDining } from 'react-icons/md';

const Logo = () => {
  return (
    <LogoLink to="/">
      <LogoBox>
        <MdDeliveryDining />
      </LogoBox>
    </LogoLink>
  );
};

export default Logo;
