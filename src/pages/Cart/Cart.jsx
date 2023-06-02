import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getCart, getMediatype, getSeller, getUser } from 'redux/selectors';

import useToggleModal from 'hooks/useToggleModal';

import Order from 'components/Cart/Order';
import OrderForm from 'components/Cart/Form';
import Box from 'components/Shared/Box';
import Modal from 'components/Shared/Modal';
import Message from 'components/Cart/Message';

import { CartBox, OrderPrice } from './Cart.styled';
import Section from 'components/Shared/Section';

const Cart = () => {
  const [TotalPrice, setTotalPrice] = useState(0);
  const [ActiveSeller, setActiveSeller] = useState(null);
  const [Destination, setDestination] = useState(null);

  const { showModal, toggleModal } = useToggleModal();

  const mediaType = useSelector(getMediatype);
  const cart = useSelector(getCart);
  const seller = useSelector(getSeller);

  const navigate = useNavigate();

  useEffect(() => {
    setActiveSeller(seller);
  }, [navigate, seller]);

  useEffect(() => {
    let price = 0;

    cart.map(({ total }) => (price += total));

    setTotalPrice(price);
  }, [cart]);

  return (
    <Section>
      {showModal && (
        <Modal toggleModal={toggleModal} showModal={showModal}>
          <Message
            ActiveSeller={ActiveSeller}
            setActiveSeller={setActiveSeller}
            Destination={Destination}
            txt="Order Successfully sent!"
          />
        </Modal>
      )}
      <CartBox mediaType={mediaType}>
        <Order mediaType={mediaType} cart={cart} />

        {cart?.length && (
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
        )}
      </CartBox>
    </Section>
  );
};

export default Cart;
