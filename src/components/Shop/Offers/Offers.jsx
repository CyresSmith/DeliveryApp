import { GridLoader } from 'react-spinners';

import Box from 'components/shared/Box';
import Item from './OfferItem';
import { OffersBox } from './Offers.styled';

import theme from 'theme';
import { useSelector } from 'react-redux';
import { getMediatype } from 'redux/selectors';

const Offers = ({ ActiveSeller, OffersItems, isLoading }) => {
  const mediaType = useSelector(getMediatype);

  return (
    <OffersBox mediaType={mediaType}>
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
          <Item
            mediaType={mediaType}
            key={item.name}
            item={item}
            ActiveSeller={ActiveSeller}
          />
        ))}
    </OffersBox>
  );
};

export default Offers;
