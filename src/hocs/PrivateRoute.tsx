import { Navigate } from 'react-router-dom';

interface IPrivateRoute {
  children: JSX.Element;
  isAuth: boolean;
}

export default function PrivateRout({ children, isAuth }: IPrivateRoute) {
  if (isAuth) {
    return children;
  }
  return <Navigate to="/welcome" />;
}
