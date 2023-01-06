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
      <h3 className="title">Felicitaciones!</h3>
      <span>Excelente! Completaste el formulario correctamente!. </span>
      <span>Deseas ver los resultados parciales de la encuesta? </span>
      <span>Puedes realizarla nueuvamente si lo deseas</span>
      <div className="bg-green-600 w-full h-12 flex justify-around">
        <button onClick={() => handleModal(false)} className="btn-secondary">
          Quiero realizarla nuevamente
        </button>
        <button onClick={goToResults} className="btn-primary">
          Quiero ver los resultados!
        </button>
      </div>
    </>
  );
}

export default GratzPage;
