import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { resetCart } from 'redux/cartSlice';
import { resetSeller } from 'redux/sellerSlice';

import { ImCross } from 'react-icons/im';
import { HiShoppingCart } from 'react-icons/hi';

import Box from 'components/shared/Box';
import Button from 'components/shared/Button';
import { MessageTxt } from './Message.styled';

import theme from 'theme';

const Message = ({ ActiveSeller, toggleModal }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleResetCart = () => {
    toggleModal();
    dispatch(resetCart());
    dispatch(resetSeller());
    navigate('/');
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      style={{ maxWidth: '600px' }}
    >
      <MessageTxt>
        The shopping cart contains the goods of the seller "
        {ActiveSeller.toUpperCase()}"!
      </MessageTxt>
      <MessageTxt>Do you want to place an order?</MessageTxt>
      <MessageTxt>Or the items will be removed from the cart!</MessageTxt>
      <Box
        style={{
          marginTop: theme.space[5],
          display: 'flex',
          gap: theme.space[4],
        }}
      >
        <Button icon={ImCross} onClick={handleResetCart}>
          Reset Cart
        </Button>
        <Button icon={HiShoppingCart} onClick={() => navigate('/cart')}>
          Go to Cart
        </Button>
      </Box>
    </Box>
  );
};

export default Message;
