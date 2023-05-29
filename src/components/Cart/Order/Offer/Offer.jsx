import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { FaPlus, FaMinus, FaTrashAlt } from 'react-icons/fa';

import { Item, Image, Name, Price } from './Item.styled';

import Box from 'components/shared/Box';
import IconButton from 'components/Shared/IconButton';

import theme from 'theme';
import { removeFromCart, changeItemInCart } from 'redux/cartSlice';

const Offer = ({ offer }) => {
  const [Count, setCount] = useState(1);

  const dispatch = useDispatch();

  const total = Number(offer.price) * Count;

  useEffect(() => {
    dispatch(changeItemInCart({ name: offer.name, count: Count, total }));
  }, [Count, dispatch]);

  const increaseCount = () => {
    setCount(prev => prev + 1);
  };

  const decreaseCount = () => {
    if (Count === 1) {
      dispatch(removeFromCart(offer.name));
      return;
    }

    setCount(prev => prev - 1);
  };

  const removeItem = () => {
    dispatch(removeFromCart(offer.name));
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
            Count: <b>{Count}</b>
          </span>
          {total > offer.price && (
            <span style={{ marginLeft: theme.space[5] }}>
              Total: <b>{total}</b>
            </span>
          )}
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
        />
        <IconButton
          icon={FaTrashAlt}
          iconSize={20}
          onClick={removeItem}
          ariaLable="remove item "
          color={theme.colors.alert}
        />
      </Box>
    </Item>
  );
};

export default Offer;
