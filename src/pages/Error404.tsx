import { useNavigate } from 'react-router-dom';
import { MdArrowBackIosNew } from 'react-icons/md';

import img from '../../public/404.png';
const Error404 = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      <h3 className="colored text-8xl mt-6 mb-10 text-center overflow-visible from-red-400 to-rose-700">
        Upps...
      </h3>
      <span className="colored text-4xl mt-6 mb-6 text-center bg-gradient-to-tl from-rose-400 to-rose-700">
        Usted no deberia estar aqui
      </span>
      <div className="flex justify-between">
        <button
          className="btn-disagree text-m p-2 text-primary-800 border-primary-800 flex justify-center items-center m-auto"
          onClick={() => navigate('/')}
        >
          <MdArrowBackIosNew className="text-primary-800" />
          Volver
        </button>
        <img src={img} className="w-1/2 " />
      </div>
    </div>
  );
};

export default Error404;
