import { configureStore } from '@reduxjs/toolkit';
import { cart } from './cartSlice';
import { seller } from './sellerSlice';
import { ordersApi } from './ordersApi';
import { offersApi } from './offersApi';
import { sellersApi } from './sellersApi';

const store = configureStore({
  reducer: {
    cart,
    seller,
    [ordersApi.reducerPath]: ordersApi.reducer,
    [offersApi.reducerPath]: offersApi.reducer,
    [sellersApi.reducerPath]: sellersApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    ordersApi.middleware,
    offersApi.middleware,
    sellersApi.middleware,
  ],
});

export default store;
