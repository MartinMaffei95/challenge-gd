import { useNavigate } from 'react-router';
import { Confeti } from '../components/ConfetiComponent/Confeti';
import QuizFormContainer from '../components/Container/QuizFormContainer';

type GratzPageProps = {
  handleModal: Function;
};
export function GratzPage({ handleModal }: GratzPageProps) {
  const navigate = useNavigate();

  const goToResults = () => {
    navigate('quizes', { state: { id: 'h6QL6qbQx7L7Uh67fKV0' } });
  };

  return (
    <>
      {/* <Confeti /> */}
      <h3 className="colored text-6xl mt-6 mb-6 text-center">
        Felicitaciones!
      </h3>
      <div className="flex flex-col h-full  justify-around items-center">
        <div className="flex flex-col">
          <span className="subtitle m-1 font-normal p-0">
            Excelente! Completaste el formulario correctamente!.{' '}
          </span>
          <span className="subtitle m-1 font-normal p-0">
            Deseas ver los resultados parciales de la encuesta?{' '}
          </span>
          <span className="subtitle m-1 font-normal p-0">
            Puedes realizarla nueuvamente si lo deseas
          </span>
        </div>
        <div className=" w-full h-12 flex justify-around mt-6">
          <button onClick={() => handleModal(false)} className="btn-disagree">
            Quiero realizarla nuevamente
          </button>
          <button onClick={goToResults} className="btn-agree">
            Quiero ver los resultados!
          </button>
        </div>
      </div>
    </>
  );
}

export default GratzPage;
