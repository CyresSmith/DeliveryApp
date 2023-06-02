import useLockBodyScroll from 'hooks/useLockBodyScroll';
import IconButton from 'components/Shared/IconButton';
import Navigation from '../Navigation';
import { MobileMenuBox } from './MobileMenu.styled';

import { ImCross } from 'react-icons/im';
import Box from 'components/shared/Box';
import theme from 'theme';
import UserPanel from '../UserPanel';

const MobileMenu = ({ mediaType, toggleMobileMenu, MobileMenuOpen }) => {
  useLockBodyScroll();

  return (
    <MobileMenuBox mediaType={mediaType} MobileMenuOpen={MobileMenuOpen}>
      <Box style={{ marginBottom: theme.space[5] }}>
        <IconButton
          onClick={toggleMobileMenu}
          icon={ImCross}
          iconSize={20}
          ariaLabel="menu close button"
        />
      </Box>
      {mediaType === 'mobile' && (
        <UserPanel mediaType={mediaType} toggleMobileMenu={toggleMobileMenu} />
      )}
      <Navigation toggleMobileMenu={toggleMobileMenu} />
    </MobileMenuBox>
  );
};

export default MobileMenu;
