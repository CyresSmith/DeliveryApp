import { GridLoader } from 'react-spinners';

import Box from 'components/shared/Box';
import Item from './OfferItem';
import { OffersBox } from './Offers.styled';

import theme from 'theme';

const Offers = ({ ActiveSeller, OffersItems, isLoading }) => {
  return (
    <OffersBox>
      {isLoading && (
        <Box
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <GridLoader color={theme.colors.accent} />
        </Box>
      )}
      {!isLoading &&
        OffersItems.map(item => (
          <Item key={item.name} item={item} ActiveSeller={ActiveSeller} />
        ))}
    </OffersBox>
  );
};

export default Offers;
