import { useNavigate } from 'react-router-dom';
import { MdArrowBackIosNew } from 'react-icons/md';

import img from '../../public/404.png';
const Error404 = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-screen h-screen overflow-hidden bg-gradient-to-tl from-white to-neutral-50">
      <h3 className="colored text-8xl mt-6 mb-10 text-center overflow-visible from-red-400 to-rose-700">
        Upps...
      </h3>
      <span className="colored text-4xl mt-6 mb-6 text-center bg-gradient-to-tl from-rose-400 to-rose-700">
        No encontramos lo que buscaba
      </span>
      <span className="text-2xl mb-2 text-center font-light">404 error</span>
      <div className="flex flex-row justify-between items-center w-full h-full">
        <button
          className="btn-disagree text-m p-2 text-primary-800 border-primary-800 flex justify-center items-center m-auto self-baseline"
          onClick={() => navigate('/')}
        >
          <MdArrowBackIosNew className="text-primary-800" />
          Volver
        </button>
        <img
          src={img}
          className="max-w-xs w-1/2 self-end translate-y-10 translate-x-5"
        />
      </div>
    </div>
  );
};

export default Error404;
