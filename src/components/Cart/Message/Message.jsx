import { useNavigate } from 'react-router-dom';

import { AiFillShop } from 'react-icons/ai';

import Box from 'components/shared/Box';
import Button from 'components/shared/Button';
import { MessageTxt } from './Message.styled';

import theme from 'theme';

const Message = ({ txt }) => {
  const navigate = useNavigate();

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <MessageTxt>{txt}</MessageTxt>
      <Box style={{ marginTop: theme.space[5] }}>
        <Button icon={AiFillShop} onClick={() => navigate('/')}>
          Got to Shop
        </Button>
      </Box>
    </Box>
  );
};

export default Message;
