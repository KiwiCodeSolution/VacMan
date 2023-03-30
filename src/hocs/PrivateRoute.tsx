import { Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks/reduxHooks";

interface IPrivateRoute {
  children: JSX.Element;
}

export const PrivateRoute = ({ children }: IPrivateRoute) => {
  const { isAuth } = useAppSelector(state => state.user);
  return isAuth ? children : <Navigate to="/login" />;
};

export const RedirectRoute = ({ children }: IPrivateRoute) => {
  const { isAuth } = useAppSelector(state => state.user);
  return isAuth ? <Navigate to="/" /> : children;
};
