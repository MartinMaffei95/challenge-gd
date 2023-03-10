import { useNavigate } from 'react-router';
import { MdArrowBackIosNew } from 'react-icons/md';
import { ResultCard } from '../components/Pure/ResultCard';
import { useResultStates } from '../Hooks/useResultStates';
import SkeletonCard from '../components/Pure/SkeletonCard';
function QuizesPage() {
  const { results, clientResult, loading } = useResultStates();

  const navigate = useNavigate();

  return (
    <div className="pb-8 p-4">
      <button
        className="btn-disagree text-m p-2 text-primary-800 border-primary-800 flex justify-center items-center"
        onClick={() => navigate('/')}
      >
        <MdArrowBackIosNew className="text-primary-800" />
        Volver
      </button>
      <h3 className="title">Resultados de todas las encuestas</h3>
      <div>
        {clientResult ? (
          <div className="flex flex-col gap-2 mt-2 ">
            <p className="subtitle">Mi respuesta</p>

            <ResultCard key={clientResult.id} quiz={clientResult} />
          </div>
        ) : null}
      </div>

      <div className="flex flex-col gap-2 mt-2">
        <p className="subtitle">Todas las respuestas</p>
        <div className="flex flex-wrap gap-2 mt-2 justify-center">
          {results && results.length > 0 ? (
            results.map((res) =>
              res.id === clientResult?.id ? (
                <ResultCard key={res.id} quiz={res} isFromClient />
              ) : (
                <ResultCard key={res.id} quiz={res} />
              )
            )
          ) : loading === true ? (
            <>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default QuizesPage;
