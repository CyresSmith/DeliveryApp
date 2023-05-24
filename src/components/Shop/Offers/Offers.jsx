import Item from './OfferItem';
import { OffersBox } from './Offers.styled';

import offers from '../../../../offers.json';

const Offers = () => {
  return (
    <OffersBox>
      {offers.map(item => (
        <Item key={item.name} item={item} />
      ))}
    </OffersBox>
  );
};

export default Offers;
