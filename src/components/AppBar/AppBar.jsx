import { memo } from 'react';

import Box from 'components/shared/Box';
import theme from 'theme';
import Navigation from './Navigation';
import UserPanel from './UserPanel';

const AppBar = () => {
  return (
    <Box as="header" pt={[4]} pb={[4]} backgroundColor={theme.colors.secondary}>
      <Box
        variant="container"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Navigation />
        <UserPanel />
      </Box>
    </Box>
  );
};

export default memo(AppBar);
