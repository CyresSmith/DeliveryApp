import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { useGetAllOffersQuery } from 'redux/offersApi';
import useToggleModal from 'hooks/useToggleModal';

import { getMediatype, getSeller } from 'redux/selectors';

import SideBar from 'components/Shop/SideBar';
import Offers from 'components/Shop/Offers';
import Modal from 'components/Shared/Modal';
import Message from 'components/Shop/Message';

import Section from 'components/Shared/Section';

const Shop = () => {
  const [ActiveSeller, setActiveSeller] = useState(null);
  const { showModal, toggleModal } = useToggleModal();

  const mediaType = useSelector(getMediatype);

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
    <Section>
      <>
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
      </>
    </Section>
  );
};

export default Shop;
