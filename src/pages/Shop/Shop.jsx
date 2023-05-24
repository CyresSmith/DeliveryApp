import Box from 'components/shared/Box';
import SideBar from 'components/Shop/SideBar';
import Offers from 'components/Shop/Offers';

import theme from 'theme';

const Shop = () => {
  return (
    <Box variant="container" as="section">
      <Box variant="section" display="flex" style={{ gap: theme.space[5] }}>
        <SideBar />
        <Offers />
      </Box>
    </Box>
  );
};

export default Shop;
