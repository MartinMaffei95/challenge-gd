import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { QuizResponse } from '../interfaces/QuizResponse.interface';
import { getQuizes } from '../services/Quizes.services';

export const useResultStates = () => {
  const [results, setResults] = useState<QuizResponse[]>([]);
  const [clientResult, setClientResult] = useState<QuizResponse>();
  const [loading, setLoading] = useState<boolean>(false);

  let location = useLocation();
  console.log(location?.state?.id);

  const assingQuizes = (quizes: QuizResponse[], locationStateID?: string) => {
    setResults(quizes);
    if (!locationStateID) return;
    const quizesFromClient = quizes.find((q) => q.id === locationStateID);
    setClientResult(quizesFromClient);
  };

  useEffect(() => {
    setLoading(true);
    try {
      getQuizes().then((res) => {
        setLoading(false);

        return assingQuizes(res as QuizResponse[], location?.state?.id);
      });
    } catch (e) {
      setLoading(false);

      console.error('AAAAAAAAAAAAAAAAAAAHHHHHHHHHHHHHHHHGGGG MEMUERO');
    }
  }, []);

  return {
    results,
    clientResult,
    loading,
  };
};
