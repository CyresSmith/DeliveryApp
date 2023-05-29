import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getCart, getSeller } from 'redux/selectors';

import useToggleModal from 'hooks/useToggleModal';

import Order from 'components/Cart/Order';
import OrderForm from 'components/Cart/Form';
import Box from 'components/Shared/Box';
import Modal from 'components/Shared/Modal';
import Message from 'components/Cart/Message';
import Map from 'components/Cart/GoogleMap';

import { CartBox, OrderPrice } from './Cart.styled';

import theme from 'theme';

const Cart = () => {
  const [TotalPrice, setTotalPrice] = useState(0);
  const [ActiveSeller, setActiveSeller] = useState(null);
  const [Destination, setDestination] = useState(null);
  const { showModal, toggleModal } = useToggleModal();

  const cart = useSelector(getCart);
  const seller = useSelector(getSeller);

  const navigate = useNavigate();

  useEffect(() => {
    if (!seller) {
      navigate('/');
      return;
    }

    setActiveSeller(seller);
  }, [navigate, seller]);

  useEffect(() => {
    let price = 0;

    cart.map(({ total }) => (price += total));

    setTotalPrice(price);
  }, [cart]);

  return (
    <Box variant="container" as="section">
      <Box variant="section">
        {showModal && (
          <Modal toggleModal={toggleModal} showModal={showModal}>
            <Message txt="Order Successfully sent!" />
            {/* {ActiveSeller && Destination && (
              <Map ActiveSeller={ActiveSeller} Destination={Destination} />
            )} */}
          </Modal>
        )}
        <CartBox>
          <Box
            style={{
              display: 'flex',
              gap: theme.space[5],
            }}
          >
            <Order cart={cart} />
            <Box>
              <OrderPrice>
                Total Price: <b>{TotalPrice}</b>
              </OrderPrice>
              <OrderForm
                totalPrice={TotalPrice}
                setDestination={setDestination}
                toggleModal={toggleModal}
                ActiveSeller={ActiveSeller}
              />
            </Box>
          </Box>
        </CartBox>
      </Box>
    </Box>
  );
};

export default Cart;
