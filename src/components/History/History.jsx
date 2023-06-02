import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { GridLoader } from 'react-spinners';

import { getMediatype } from 'redux/selectors';
import { useGetHistoryQuery } from 'redux/authApi';
import {
  HistoryItems,
  OrderBox,
  Info,
  TotalPrice,
  Id,
  Items,
  Item,
  Product,
} from './History.styled';
import Box from 'components/shared/Box';
import theme from 'theme';

const HistoryList = () => {
  const mediaType = useSelector(getMediatype);

  const {
    data = [],
    isLoading,
    error,
    isError,
    isSuccess,
    refetch,
  } = useGetHistoryQuery();

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <HistoryItems mediaType={mediaType}>
      {isLoading && (
        <Box
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <GridLoader color={theme.colors.accent} />
        </Box>
      )}

      {!isLoading &&
        data?.history?.map(order => (
          <OrderBox mediaType={mediaType} key={order._id}>
            <Items mediaType={mediaType}>
              {order.items.map(({ _id, name, price, count, total }) => (
                <Item key={_id} mediaType={mediaType}>
                  <Product>{name}</Product>
                  <span>
                    <b>Price:</b> {price}
                  </span>
                  <span>
                    <b>Count: </b>
                    {count}
                  </span>
                  <Product>Total: {total}</Product>
                </Item>
              ))}
            </Items>
            <Info>
              <Id>ID: {order._id}</Id>
              <b>Store:</b>
              <span> {order.seller.name}</span>
              <b>Client Name:</b>
              <span>{order.client.name}</span>
              <b>Address:</b>
              <span>{order.client.address}</span>
              <b>Date:</b>
              <span>{new Date(order.createdAt).toLocaleString()}</span>
              <TotalPrice>Total price: {order.totalPrice}</TotalPrice>
            </Info>
          </OrderBox>
        ))}
    </HistoryItems>
  );
};

export default HistoryList;
