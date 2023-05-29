import { useDispatch, useSelector } from 'react-redux';
import { getCart } from 'redux/selectors';

import { useGetAllSellersQuery } from 'redux/sellersApi';
import { setSeller, resetSeller } from 'redux/sellerSlice';

import ShopItem from './ShopItem';
import { SideBarBox } from './SideBar.styled';

const SideBar = ({ ActiveSeller, toggleModal }) => {
  const dispatch = useDispatch();

  const cart = useSelector(getCart);

  const handleSellerSet = seller => {
    if (cart.length > 0) {
      toggleModal();
      return;
    }
    dispatch(setSeller(seller));
  };
  const handleSellerRemove = () => dispatch(resetSeller());

  const { data = [], isLoading, error, refetch } = useGetAllSellersQuery([]);

  return (
    <SideBarBox>
      {data.map(seller => (
        <ShopItem
          key={seller._id}
          seller={seller}
          activeSeller={ActiveSeller}
          handleSellerSet={handleSellerSet}
          handleSellerRemove={handleSellerRemove}
        />
      ))}
    </SideBarBox>
  );
};

export default SideBar;
