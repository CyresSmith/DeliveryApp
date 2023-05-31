import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getAuth } from 'redux/selectors';

const PrivateRoute = ({ children }) => {
  const { user, accessToken } = useSelector(getAuth);

  return !user._id && !accessToken ? <Navigate to="/login" /> : children;
};

export default PrivateRoute;
