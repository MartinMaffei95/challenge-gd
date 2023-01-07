import { BsFillStarFill } from 'react-icons/bs';
import { QuizResponse } from '../../interfaces/QuizResponse.interface';
import { TextLine } from './TextLine';

type QuizResponseType = {
  quiz: QuizResponse;
  isFromClient?: boolean;
};
export const ResultCard = ({ quiz, isFromClient }: QuizResponseType) => {
  return (
    <div
      className="border-primary-500 border-2 rounded-sm  text-lg w-2/2 rounded-sm overflow-hidden relative shadow-xl"
      key={quiz.id}
    >
      {isFromClient ? (
        <div className=" h-20 w-12 origin-center rotate-45 -translate-y-4 bg-yellow-400 absolute -left-4 -top-4 z-20 flex justify-end p-2 items-center drop-shadow-sm">
          <BsFillStarFill className="text-yellow-600" />
        </div>
      ) : null}

      <TextLine name={'Nombre'} value={quiz.full_name} />
      <TextLine name={'Fecha de nacimiento'} value={quiz.birth_date} />
      <TextLine name={'Email'} value={quiz.email} />
      <TextLine name={'Pais de origen'} value={quiz.country_of_origin} />
    </div>
  );
};
