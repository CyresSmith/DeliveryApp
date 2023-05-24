import { Outlet } from 'react-router-dom';

import AppBar from 'components/AppBar';

import ScrollUpBtn from 'components/shared/ScrollUpButton';
import { TiArrowUpThick } from 'react-icons/ti';

const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <Outlet />
      <ScrollUpBtn icon={TiArrowUpThick} iconSize={30} round={true} />
    </>
  );
};

export default SharedLayout;
