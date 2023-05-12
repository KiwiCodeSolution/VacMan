/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const TestPage = () => {
  const [state, setState] = useState(1);

  useEffect(() => () => console.log("clearing function, return:", state), [state]);

  const incFn = () => setState(state + 1);

  return (
    <>
      <p className="text-center text-xl select-none" onClick={incFn}>
        [ Increase ]
      </p>
      <p className="text-center text-xl">{state}</p>
      <Link to="/">
        <p className="text-center text-xl p-4">Вернуться домой</p>
      </Link>
    </>
  );
};

export default TestPage;
