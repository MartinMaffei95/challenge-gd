import { useNavigate } from 'react-router';
import { MdArrowBackIosNew } from 'react-icons/md';
import { ResultCard } from '../components/Pure/ResultCard';
import { useResultStates } from '../Hooks/useResultStates';
function QuizesPage() {
  const { results, clientResult } = useResultStates();

  const navigate = useNavigate();

  return (
    <>
      <button
        className="btn-disagree text-m p-2 text-primary-800 border-primary-800 flex justify-center items-center"
        onClick={() => navigate('/')}
      >
        <MdArrowBackIosNew className="text-primary-800" />
        Volver
      </button>
      <h3 className="title">Estos son los resultados</h3>
      <div>
        {clientResult ? (
          <div className="flex flex-col gap-2 mt-2">
            <p className="subtitle">Mi respuesta</p>

            <ResultCard key={clientResult.id} quiz={clientResult} />
          </div>
        ) : null}
      </div>
      <div className="flex flex-col gap-2 mt-2">
        <p className="subtitle">Todas las respuestas</p>
        <div className="flex flex-wrap gap-2 mt-2 justify-center">
          {results
            ? results.map((res) =>
                res.id === clientResult?.id ? (
                  <ResultCard key={res.id} quiz={res} isFromClient />
                ) : (
                  <ResultCard key={res.id} quiz={res} />
                )
              )
            : null}
        </div>
      </div>
    </>
  );
}

export default QuizesPage;
