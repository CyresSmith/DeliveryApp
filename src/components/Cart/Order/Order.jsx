import { useSelector } from 'react-redux';

import { getCart } from 'redux/selectors';

import { OrderList } from './Order.styled';
import Offer from './Offer';

const Order = ({ cart, setOrderItems }) => {
  return (
    <OrderList>
      {cart.length > 0 ? (
        cart.map(offer => {
          return (
            <Offer
              setOrderItems={setOrderItems}
              key={offer.name}
              offer={offer}
            />
          );
        })
      ) : (
        <p>Cart is empty</p>
      )}
    </OrderList>
  );
};

export default Order;
