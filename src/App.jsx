import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import SharedLayout from 'pages/SharedLayout';
import Shop from 'pages/Shop';
import Cart from 'pages/Cart';
import NotFound from 'pages/NotFound';

// const SharedLayout = lazy(() => import('pages/SharedLayout'));
// const Shop = lazy(() => import('pages/Shop'));
// const Cart = lazy(() => import('pages/Cart'));
// const NotFound = lazy(() => import('pages/NotFound'));

function App() {
  return (
    <>
      {/* <Suspense fallback={<Spinner />}> */}
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      {/* </Suspense> */}
    </>
  );
}

export default App;
