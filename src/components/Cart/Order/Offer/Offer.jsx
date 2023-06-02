import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { FaPlus, FaMinus, FaTrashAlt } from 'react-icons/fa';

import {
  Item,
  Image,
  InfoBox,
  Info,
  Name,
  Price,
  Count,
  Total,
  ButtonBox,
} from './Item.styled';

import IconButton from 'components/Shared/IconButton';

import theme from 'theme';
import { removeFromCart, changeItemInCart } from 'redux/cartSlice';

const Offer = ({ offer, mediaType }) => {
  const [count, setCount] = useState(1);

  const dispatch = useDispatch();

  const total = Number(offer.price) * count;

  useEffect(() => {
    dispatch(changeItemInCart({ name: offer.name, count, total }));
  }, [count, dispatch]);

  const increaseCount = () => {
    setCount(prev => prev + 1);
  };

  const decreaseCount = () => {
    if (count === 1) {
      dispatch(removeFromCart(offer.name));
      return;
    }

    setCount(prev => prev - 1);
  };

  const removeItem = () => {
    dispatch(removeFromCart(offer.name));
  };

  return (
    <Item key={offer.name} mediaType={mediaType}>
      <Image src={offer.image} mediaType={mediaType} />

      <InfoBox>
        <Info mediaType={mediaType}>
          <Name>{offer.name}</Name>
          <Price>Price: {offer.price}</Price>
          <Count>Count: {count}</Count>
          <Total>Total: {total}</Total>
        </Info>

        <ButtonBox mediaType={mediaType}>
          <IconButton
            mediaType={mediaType}
            icon={FaPlus}
            iconSize={mediaType === 'desktop' ? 20 : 30}
            onClick={increaseCount}
            ariaLabel="increase count"
          />
          <IconButton
            mediaType={mediaType}
            icon={FaMinus}
            iconSize={mediaType === 'desktop' ? 20 : 30}
            onClick={decreaseCount}
            ariaLabel="decrease count"
          />
          <IconButton
            mediaType={mediaType}
            icon={FaTrashAlt}
            iconSize={mediaType === 'desktop' ? 20 : 30}
            onClick={removeItem}
            ariaLabel="remove item "
            color={theme.colors.alert}
          />
        </ButtonBox>
      </InfoBox>
    </Item>
  );
};

export default Offer;
