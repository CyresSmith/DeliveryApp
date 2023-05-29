import { OrderList, EmptyCart } from './Order.styled';
import Offer from './Offer';

const Order = ({ cart }) => {
  return (
    <OrderList>
      {cart.length > 0 ? (
        cart.map(offer => {
          return <Offer key={offer.name} offer={offer} />;
        })
      ) : (
        <EmptyCart>Cart is empty</EmptyCart>
      )}
    </OrderList>
  );
};

export default Order;
