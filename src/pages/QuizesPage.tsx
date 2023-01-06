import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import QuizFormContainer from '../components/Container/QuizFormContainer';
import { QuizResponse } from '../interfaces/QuizResponse.interface';
import { getQuizes } from '../services/Quizes.services';

function QuizesPage() {
  const [results, setResults] = useState<QuizResponse[]>([]);
  const [clientResult, setClientResult] = useState<QuizResponse>();
  const navigate = useNavigate();

  let location = useLocation();
  console.log(location.state.id);

  type QuizResponseType = { quiz: QuizResponse };
  const ResultCard = ({ quiz }: QuizResponseType) => {
    type TextLineProps = {
      name: string;
      value: string;
    };
    const TextLine = ({ name, value }: TextLineProps) => {
      return (
        <div className="label-style text-lg pt-1 pb-1 flex justify-between border-b-2">
          <span className="font-semibold">{name}:</span>
          <span>{value}</span>
        </div>
      );
    };
    return (
      <div
        className="border-primary-500 border-2 text-lg w-1/2 rounded-sm "
        key={quiz.id}
      >
        <TextLine name={'Nombre'} value={quiz.full_name} />
        <TextLine name={'Fecha de nacimiento'} value={quiz.birth_date} />
        <TextLine name={'Email'} value={quiz.email} />
        <TextLine name={'Pais de origen'} value={quiz.country_of_origin} />
      </div>
    );
  };

  const assingQuizes = (quizes: QuizResponse[], locationStateID?: string) => {
    setResults(quizes);

    if (!locationStateID) return;
    // const quizesFromAll = quizes.filter((q) => q.id !== locationStateID);
    const quizesFromClient = quizes.find((q) => q.id === locationStateID);
    // setResults(quizesFromAll);
    setClientResult(quizesFromClient);
  };

  useEffect(() => {
    try {
      getQuizes().then((res) => assingQuizes(res, location.state.id));
    } catch (e) {
      console.error('AAAAAAAAAAAAAAAAAAAHHHHHHHHHHHHHHHHGGGG MEMUERO');
    }
  }, []);
  return (
    <>
      <button onClick={() => navigate('/')}>Atras</button>
      <h3 className="title">Estos son los resultados</h3>
      <div>
        {clientResult ? (
          <ResultCard key={clientResult.id} quiz={clientResult} />
        ) : null}
      </div>
      <div className="flex gap-2 mt-2">
        {results
          ? results.map((res) => <ResultCard key={res.id} quiz={res} />)
          : null}
      </div>
    </>
  );
}

export default QuizesPage;
