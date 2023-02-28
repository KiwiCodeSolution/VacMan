import { useAppDispatch } from '../../hooks/reduxHooks';
import { setIsAuth } from '../../redux/userSlice';
import * as Icons from '../../img/iconsComponents';

export default function Main() {
  const dispatch = useAppDispatch();

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl mb-4">User Main Page</h1>
      <ul className="flex ml-10">
        <li className="flex odd:bg-gray-200 even:bg-orange-200 last:ml-20">
          <h2 className="p-2">Hello user!</h2>
        </li>
        <li className="flex odd:bg-gray-200 even:bg-orange-200 last:ml-20">
          <Icons.Eye />
          <button className="p-2" type="button" onClick={() => dispatch(setIsAuth(false))}>
            LogOUT
          </button>
          <Icons.Eye cross fill="blue" />
        </li>
      </ul>
      <p className="mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem corporis quas incidunt eaque laboriosam
        vitae corrupti esse assumenda sunt, labore culpa enim non tempore nulla quam distinctio praesentium doloremque!
        Harum!
      </p>
    </div>
  );
}
