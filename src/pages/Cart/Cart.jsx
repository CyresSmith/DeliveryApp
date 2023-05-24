import Order from 'components/Cart/Order';
import OrderForm from 'components/Cart/Form';
import Box from 'components/shared/Box';

import { CartBox } from './Cart.styled';
import { useState } from 'react';

const Cart = () => {
  const [TotalPrice, setTotalPrice] = useState(0);

  console.log('TotalPrice: ', TotalPrice);

  return (
    <Box variant="container" as="section">
      <Box variant="section">
        <CartBox>
          <OrderForm />
          <Order setTotalPrice={setTotalPrice} />
        </CartBox>
      </Box>
    </Box>
  );
};

export default Cart;
