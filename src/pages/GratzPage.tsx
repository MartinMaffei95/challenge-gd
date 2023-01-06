import { useNavigate } from 'react-router';

type GratzPageProps = {
  handleModal: Function;
};
export function GratzPage({ handleModal }: GratzPageProps) {
  const navigate = useNavigate();
  const client_id = JSON.parse(localStorage.getItem('client_id') as string);

  const goToResults = () => {
    navigate('quizes', { state: { id: client_id } });
  };

  return (
    <>
      <h3 className="colored text-4xl mt-6 mb-6 text-center">
        Felicitaciones!
      </h3>
      <div className="flex flex-col h-full justify-around items-center">
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
        <div className=" w-full h-18 flex justify-around mt-4 gap-2">
          <button
            onClick={() => handleModal(false)}
            className="btn-disagree text-m p-2"
          >
            Quiero realizarla nuevamente
          </button>
          <button onClick={goToResults} className="btn-agree text-m p-2">
            Quiero ver los resultados!
          </button>
        </div>
      </div>
    </>
  );
}

export default GratzPage;
