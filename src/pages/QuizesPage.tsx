import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import QuizFormContainer from '../components/Container/QuizFormContainer';
import { QuizResponse } from '../interfaces/QuizResponse.interface';
import { getQuizes } from '../services/Quizes.services';

function QuizesPage() {
  const [results, setResults] = useState<QuizResponse[]>([]);
  const [clientResult, setClientResult] = useState<QuizResponse>();
  let location = useLocation();
  type QuizResponseType = { quiz: QuizResponse };
  const ResultCard = ({ quiz }: QuizResponseType) => {
    return (
      <div key={quiz.id}>
        <h3>
          Nombre: <span>{quiz.full_name}</span>
        </h3>
        <p>
          Fecha de nacimiento: <span>{quiz.birth_date}</span>
        </p>
        <p>
          Email: <span>{quiz.email}</span>
        </p>
        <p>
          Pasi de origen: <span>{quiz.country_of_origin}</span>
        </p>
      </div>
    );
  };

  const assingQuizes = (quizes: QuizResponse[], locationStateID?: string) => {
    setResults(quizes);
    if (locationStateID) return;
    // const quizesFromAll = quizes.filter((q) => q.id !== locationStateID);
    const quizesFromClient = quizes.find((q) => q.id === locationStateID);
    // setResults(quizesFromAll);
    setClientResult(quizesFromClient);
  };

  useEffect(() => {
    try {
      getQuizes().then((res) => assingQuizes(res, location?.state?.id));
    } catch (e) {
      console.error('AAAAAAAAAAAAAAAAAAAHHHHHHHHHHHHHHHHGGGG MEMUERO');
    }
  }, []);
  return (
    <>
      <h3 className="title">Estos son los resultados parciales</h3>
      {/* {results
        ? results.filter((res) => res.id === location?.state?.id)
        ? results.filter((res) => res.id !== location?.state?.id)
        : null
      } */}

      {results
        ? results.map((res) => <ResultCard key={res.id} quiz={res} />)
        : null}
    </>
  );
}

export default QuizesPage;
