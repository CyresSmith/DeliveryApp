import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useGetCurrentUserQuery } from 'redux/authApi';
import { setUser } from 'redux/authSlice';
import { setMediaType } from 'redux/mediaTypeSlice';

import useMediaHook from 'hooks/useMediaHook';
// import SharedLayout from 'pages/SharedLayout';
// import Register from 'pages/Register';
// import Login from 'pages/Login';
// import History from 'pages/History';
// import Verify from 'pages/Verify';
// import Shop from 'pages/Shop';
// import Cart from 'pages/Cart';
// import NotFound from 'pages/NotFound';

import PrivateRoute from 'components/PrivateRoute';

const SharedLayout = lazy(() => import('pages/SharedLayout'));
const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));
const History = lazy(() => import('pages/History'));
const Verify = lazy(() => import('pages/Verify'));
const Shop = lazy(() => import('pages/Shop'));
const Cart = lazy(() => import('pages/Cart'));
const NotFound = lazy(() => import('pages/NotFound'));

function App() {
  const dispatch = useDispatch();

  const { MediaType } = useMediaHook();

  const { data, isLoading, error, isError, isSuccess } =
    useGetCurrentUserQuery();

  useEffect(() => {
    if (!MediaType) {
      return;
    }

    dispatch(setMediaType(MediaType));
  }, [MediaType, dispatch]);

  useEffect(() => {
    if (!isLoading && isSuccess) {
      dispatch(setUser(data));
    }
  }, [data, dispatch, error, isError, isLoading, isSuccess]);

  return (
    <>
      {/* <Suspense fallback={<Spinner />}> */}
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Shop />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/history"
            element={
              <PrivateRoute>
                <History />
              </PrivateRoute>
            }
          />
          <Route path="/verify/:token" element={<Verify />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} /> */
        </Route>
      </Routes>
      {/* </Suspense> */}
    </>
  );
}

export default App;
