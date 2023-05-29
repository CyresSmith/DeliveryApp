import { useDispatch } from 'react-redux';

import { MdAddShoppingCart } from 'react-icons/md';

import { addToCart } from 'redux/cartSlice';

import Button from 'components/Shared/Button';

import {
  ItemBox,
  Image,
  ItemFooter,
  Name,
  Price,
  Desc,
} from './OfferItem.styled';

const Item = ({ item, ActiveSeller }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ ...item, count: 1, total: item.price }));
  };

  return (
    <ItemBox>
      <Image alt={item.name} src={item.image} />
      <ItemFooter>
        <Name>{item.name}</Name>
        <Price>{item.price}₴</Price>
        <Desc>{item.desc}</Desc>
        <Desc>
          seller: <b>{item.seller.name.toUpperCase()}</b>
        </Desc>
        <Button
          icon={MdAddShoppingCart}
          iconSize={15}
          onClick={handleAddToCart}
          disabled={!ActiveSeller}
        >
          {ActiveSeller ? 'Add to cart' : ' please select seller'}
        </Button>
      </ItemFooter>
    </ItemBox>
  );
};

export default Item;
