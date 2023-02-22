import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { setIsAuth } from '../../redux/userSlice';

export default function Main() {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.user);
  console.log('token:', token);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl mb-4">User Main Page</h1>
      <h2>Hello user!</h2>
      <button type="button" onClick={() => dispatch(setIsAuth(false))}>
        LogOUT
      </button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem corporis quas incidunt eaque laboriosam
        vitae corrupti esse assumenda sunt, labore culpa enim non tempore nulla quam distinctio praesentium doloremque!
        Harum!
      </p>
    </div>
  );
}
