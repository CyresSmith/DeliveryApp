import { MdAddShoppingCart } from 'react-icons/md';

import Button from 'components/Shared/Button';

import {
  ItemBox,
  Image,
  ItemFooter,
  Name,
  Price,
  Desc,
} from './OfferItem.styled';

const Item = ({ item }) => {
  return (
    <ItemBox>
      <Image alt={item.name} src={item.image} />
      <ItemFooter>
        <Name>{item.name}</Name>
        <Price>{item.price}₴</Price>
        <Desc>{item.desc}</Desc>
        <Button icon={MdAddShoppingCart} iconSize={15}>
          Add to cart
        </Button>
      </ItemFooter>
    </ItemBox>
  );
};

export default Item;
