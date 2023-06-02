import { memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { getMediatype, getCart } from 'redux/selectors';

import { TiThMenu } from 'react-icons/ti';

import Navigation from './Navigation';
import UserPanel from './UserPanel';
import Header from './Header';

import Logo from './Logo';
import theme from 'theme';
import MobileMenu from './MobileMenu';

import Box from 'components/shared/Box';
import Badge from 'components/Shared/Badge';
import IconButton from 'components/Shared/IconButton';

const AppBar = () => {
  const mediaType = useSelector(getMediatype);
  const cartItems = useSelector(getCart).length;

  const [MobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mediaType === 'desktop') {
      setMobileMenuOpen(false);
    }
  }, [mediaType]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  return (
    <Header mediaType={mediaType}>
      <Logo />
      {mediaType === 'desktop' && <Navigation mediaType={mediaType} />}
      {mediaType !== 'mobile' && <UserPanel mediaType={mediaType} />}

      {mediaType !== 'desktop' && (
        <Box style={{ position: 'relative' }}>
          {cartItems !== 0 && <Badge number={cartItems} />}

          <IconButton
            icon={TiThMenu}
            iconSize={mediaType === 'desktop' ? 15 : 25}
            ariaLabel="open menu"
            backgroundColor={theme.colors.background}
            onClick={toggleMobileMenu}
          />
        </Box>
      )}
      {MobileMenuOpen && (
        <MobileMenu
          mediaType={mediaType}
          toggleMobileMenu={toggleMobileMenu}
          MobileMenuOpen={MobileMenuOpen}
        />
      )}
    </Header>
  );
};

export default memo(AppBar);
