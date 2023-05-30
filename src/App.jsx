import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { getAuth } from 'redux/selectors';

import SharedLayout from 'pages/SharedLayout';
import Register from 'pages/Register';
import Login from 'pages/Login';
import Verify from 'pages/Verify';
import Shop from 'pages/Shop';
import Cart from 'pages/Cart';
import NotFound from 'pages/NotFound';
import { setAuthHeader } from 'redux/axiosBaseQuery';
import { useGetCurrentUserQuery } from 'redux/authApi';
import { setUser } from 'redux/authSlice';

// const SharedLayout = lazy(() => import('pages/SharedLayout'));
// const Shop = lazy(() => import('pages/Shop'));
// const Cart = lazy(() => import('pages/Cart'));
// const NotFound = lazy(() => import('pages/NotFound'));

function App() {
  const { accessToken } = useSelector(getAuth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (accessToken) {
  //     setAuthHeader(accessToken);
  //   }
  // }, [accessToken]);

  const { data, isLoading, error, isError, isSuccess } =
    useGetCurrentUserQuery();

  console.log('🚀 ~ file: App.jsx:36 ~ App ~ data:', data);

  useEffect(() => {
    if (!isLoading && isSuccess) {
      dispatch(setUser(data));
    }

    if (isError) {
      console.error(error.data.message);
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
          <Route path="/verify/:token" element={<Verify />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      {/* </Suspense> */}
    </>
  );
}

export default App;
