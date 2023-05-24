import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Order from 'components/Cart/Order';
import OrderForm from 'components/Cart/Form';
import Box from 'components/shared/Box';

import { CartBox, OrderPrice } from './Cart.styled';

import { getCart } from 'redux/selectors';

const Cart = () => {
  const [TotalPrice, setTotalPrice] = useState(0);
  const [OrderItems, setOrderItems] = useState([]);

  const cart = useSelector(getCart);

  useEffect(() => {
    if (cart.length < 1) {
      return;
    }

    cart.map(({ name, price }) => {
      setOrderItems(prev => {
        return [
          ...prev,
          { name, price: Number(price), count: 1, total: Number(price) },
        ];
      });
    });
  }, [cart]);

  useEffect(() => {
    if (OrderItems.length < 1) {
      return;
    }

    OrderItems.map(item => setTotalPrice(prev => prev + item.total));
  }, [OrderItems]);

  return (
    <Box variant="container" as="section">
      <Box variant="section">
        <CartBox>
          <Order cart={cart} setOrderItems={setOrderItems} />
          <Box>
            <OrderPrice>
              Total Price: <b>{TotalPrice}</b>{' '}
            </OrderPrice>
            <OrderForm OrderItems={OrderItems} totalPrice={TotalPrice} />
          </Box>
        </CartBox>
      </Box>
    </Box>
  );
};

export default Cart;
