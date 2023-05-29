import { Item, Name } from './ShopItem.styled';

const ShopItem = ({
  seller,
  activeSeller,
  handleSellerSet,
  handleSellerRemove,
}) => {
  const toggleActiveSeller = seller => {
    if (seller._id === activeSeller?._id) {
      handleSellerRemove();
      return;
    }

    handleSellerSet(seller);
  };

  return (
    <Item
      seller={seller._id}
      active={activeSeller?._id}
      onClick={() => toggleActiveSeller(seller)}
    >
      <Name>{seller.name.toUpperCase()}</Name>
    </Item>
  );
};

export default ShopItem;
