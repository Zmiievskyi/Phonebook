import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLogin } from 'redux/auth/selectors';
/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(getIsLogin);
  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};
