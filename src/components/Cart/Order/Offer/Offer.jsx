import { useEffect, useState } from 'react';

import { FaPlus, FaMinus } from 'react-icons/fa';

import { Item, Image, Name, Price } from './Item.styled';

import Box from 'components/shared/Box';
import IconButton from 'components/Shared/IconButton';

import theme from 'theme';

const Offer = ({ offer, setTotalPrice }) => {
  const [Count, setCount] = useState(1);

  const total = Number(offer.price) * Count;

  useEffect(() => {
    setTotalPrice(prev => prev + Number(offer.price));
  }, []);

  const increaseCount = () => {
    setCount(prev => prev + 1);
    setTotalPrice(prev => prev + Number(offer.price));
  };

  const decreaseCount = () => {
    if (Count < 1) {
      return;
    }

    setCount(prev => prev - 1);
    setTotalPrice(prev => prev - Number(offer.price));
  };

  return (
    <Item key={offer.name}>
      <Image src={offer.image} />
      <Box ml={theme.space[4]} p={theme.space[3]}>
        <Name>{offer.name}</Name>
        <Price>
          <span>
            Price: <b>{offer.price}</b>
          </span>
          <span style={{ marginLeft: theme.space[5] }}>
            Total: <b>{offer.price * Count}</b>
          </span>
          <span style={{ marginLeft: theme.space[5] }}>
            Count: <b>{Count}</b>
          </span>
        </Price>
      </Box>

      <Box
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: theme.space[3],
          marginLeft: 'auto',
          padding: theme.space[5],
        }}
      >
        <IconButton
          icon={FaPlus}
          iconSize={20}
          onClick={increaseCount}
          ariaLable="increase count"
        />
        <IconButton
          icon={FaMinus}
          iconSize={20}
          onClick={decreaseCount}
          ariaLable="decrease count"
          disabled={Count === 0}
        />
      </Box>
    </Item>
  );
};

export default Offer;
