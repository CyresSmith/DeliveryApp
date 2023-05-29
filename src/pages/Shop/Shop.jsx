import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { useGetAllOffersQuery } from 'redux/offersApi';
import useToggleModal from 'hooks/useToggleModal';

import { getSeller } from 'redux/selectors';

import Box from 'components/shared/Box';
import SideBar from 'components/Shop/SideBar';
import Offers from 'components/Shop/Offers';
import Modal from 'components/Shared/Modal';
import Message from 'components/Shop/Message';

import theme from 'theme';

const Shop = () => {
  const [ActiveSeller, setActiveSeller] = useState(null);
  const { showModal, toggleModal } = useToggleModal();

  const seller = useSelector(getSeller);

  const {
    data = [],
    isLoading,
    error,
    refetch,
  } = useGetAllOffersQuery(ActiveSeller?._id);

  useEffect(() => {
    setActiveSeller(seller);
  }, [seller]);

  useEffect(() => {
    refetch();
  }, [refetch, ActiveSeller]);

  return (
    <Box variant="container" as="section">
      <Box variant="section" display="flex" style={{ gap: theme.space[5] }}>
        <SideBar ActiveSeller={ActiveSeller} toggleModal={toggleModal} />
        <Offers
          OffersItems={data}
          isLoading={isLoading}
          ActiveSeller={Boolean(ActiveSeller)}
        />
        {showModal && (
          <Modal toggleModal={toggleModal} showModal={showModal}>
            <Message
              ActiveSeller={ActiveSeller?.name}
              toggleModal={toggleModal}
            />
          </Modal>
        )}
      </Box>
    </Box>
  );
};

export default Shop;
