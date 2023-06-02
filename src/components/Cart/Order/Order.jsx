import { OrderList, EmptyCart } from './Order.styled';
import Offer from './Offer';

const Order = ({ cart, mediaType }) => {
  return (
    <OrderList>
      {cart.length > 0 ? (
        cart.map(offer => {
          return <Offer mediaType={mediaType} key={offer.name} offer={offer} />;
        })
      ) : (
        <EmptyCart>Cart is empty</EmptyCart>
      )}
    </OrderList>
  );
};

export default Order;
