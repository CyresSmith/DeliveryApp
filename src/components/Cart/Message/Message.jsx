import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';

import { AiFillShop } from 'react-icons/ai';

import Box from 'components/shared/Box';
import Button from 'components/shared/Button';
import { MessageTxt, MessageBox } from './Message.styled';
import Map from 'components/Cart/GoogleMap';

import { resetSeller } from 'redux/sellerSlice';

const Message = ({ txt, ActiveSeller, setActiveSeller, Destination }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(resetSeller());
    navigate('/');
  };

  return (
    <MessageBox display="flex" flexDirection="column" alignItems="center">
      <MessageTxt>{txt}</MessageTxt>

      {ActiveSeller && Destination && (
        <Map ActiveSeller={ActiveSeller} Destination={Destination} />
      )}

      <Box>
        <Button icon={AiFillShop} onClick={handleClick}>
          Got to Shop
        </Button>
      </Box>
    </MessageBox>
  );
};

export default Message;
