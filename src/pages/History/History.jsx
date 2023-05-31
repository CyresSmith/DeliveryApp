import Box from 'components/shared/Box';
import { useEffect } from 'react';
import { useState } from 'react';
import { useGetHistoryQuery } from 'redux/authApi';
import theme from 'theme';
import {
  HistoryBox,
  OrderBox,
  Title,
  SubTitle,
  Items,
  Item,
} from './History.styled';

const History = () => {
  const {
    data = [],
    isLoading,
    error,
    isError,
    isSuccess,
    refetch,
  } = useGetHistoryQuery();

  const [OrdersData, setOrdersData] = useState([]);

  useEffect(() => {
    refetch();
  }, [refetch]);

  useEffect(() => {
    if (!data) {
      return;
    }

    if (isSuccess) {
      setOrdersData(data.history);
    }

    if (isError) {
      console.log(error.data.message);
    }
  }, [data, error, isError, isSuccess, refetch]);

  return (
    <Box variant="container" as="section">
      <Box variant="section">
        <HistoryBox>
          <ul>
            {data?.history?.map(order => (
              <OrderBox key={order._id}>
                <Box display="flex" style={{ gap: theme.space[5] }}>
                  <Box>
                    <Box mb={theme.space[4]}>
                      <SubTitle>ID: {order._id}</SubTitle>
                      <SubTitle>Store: {order.seller.name}</SubTitle>
                    </Box>

                    <Box mb={theme.space[4]}>
                      <SubTitle>Client Name: {order.client.name}</SubTitle>
                      <SubTitle>Address: {order.client.address}</SubTitle>
                    </Box>

                    <Box mb={theme.space[4]}>
                      <SubTitle>
                        Date: {new Date(order.createdAt).toLocaleDateString()}
                      </SubTitle>
                      <SubTitle>
                        Time: {new Date(order.createdAt).toLocaleTimeString()}
                      </SubTitle>
                    </Box>

                    <Box mb={theme.space[4]}>
                      <Title>Total price: {order.totalPrice}</Title>
                    </Box>
                  </Box>
                  <Items>
                    {order.items.map(({ _id, name, price, count, total }) => (
                      <Item key={_id}>
                        <p style={{ marginRight: theme.space[3] }}>
                          <b>{name}</b>
                        </p>
                        <p style={{ marginRight: theme.space[3] }}>
                          Price: {price}
                        </p>
                        <p style={{ marginRight: theme.space[3] }}>
                          Count: {count}
                        </p>
                        <p style={{ marginRight: theme.space[3] }}>
                          Total: {total}
                        </p>
                      </Item>
                    ))}
                  </Items>
                </Box>
              </OrderBox>
            ))}
          </ul>
        </HistoryBox>
      </Box>
    </Box>
  );
};

export default History;
