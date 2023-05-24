import { Item, Name } from './ShopItem.styled';

const ShopItem = ({ name }) => {
  return (
    <Item>
      <Name>{name}</Name>
    </Item>
  );
};

export default ShopItem;
