import { configureStore } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import { authApi } from './authApi';
import { auth } from './authSlice';
import { mediaType } from './mediaTypeSlice';
import { cart } from './cartSlice';
import { seller } from './sellerSlice';
import { ordersApi } from './ordersApi';
import { offersApi } from './offersApi';
import { sellersApi } from './sellersApi';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken', 'refreshToken'],
};

const authPersistedReducer = persistReducer(authPersistConfig, auth);

const store = configureStore({
  reducer: {
    auth: authPersistedReducer,
    mediaType,
    cart,
    seller,
    [authApi.reducerPath]: authApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
    [offersApi.reducerPath]: offersApi.reducer,
    [sellersApi.reducerPath]: sellersApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    authApi.middleware,
    ordersApi.middleware,
    offersApi.middleware,
    sellersApi.middleware,
  ],
});

export default store;
export const persistor = persistStore(store);
