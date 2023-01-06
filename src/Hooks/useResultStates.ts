import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { QuizResponse } from '../interfaces/QuizResponse.interface';
import { getQuizes } from '../services/Quizes.services';

export const useResultStates = () => {
  const [results, setResults] = useState<QuizResponse[]>([]);
  const [clientResult, setClientResult] = useState<QuizResponse>();

  let location = useLocation();
  console.log(location?.state?.id);

  const assingQuizes = (quizes: QuizResponse[], locationStateID?: string) => {
    setResults(quizes);
    if (!locationStateID) return;
    const quizesFromClient = quizes.find((q) => q.id === locationStateID);
    setClientResult(quizesFromClient);
  };

  useEffect(() => {
    try {
      getQuizes().then((res) => assingQuizes(res, location?.state?.id));
    } catch (e) {
      console.error('AAAAAAAAAAAAAAAAAAAHHHHHHHHHHHHHHHHGGGG MEMUERO');
    }
  }, []);

  return {
    results,
    clientResult,
  };
};
