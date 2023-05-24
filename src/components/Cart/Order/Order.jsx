import { OrderList } from './Order.styled';
import Offer from './Offer';

import offers from '../../../../offers.json';

const Order = ({ setTotalPrice }) => {
  return (
    <OrderList>
      {offers.map(offer => {
        return (
          <Offer setTotalPrice={setTotalPrice} key={offer.name} offer={offer} />
        );
      })}
    </OrderList>
  );
};

export default Order;
