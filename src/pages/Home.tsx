import QuizFormContainer from '../components/Container/QuizFormContainer';
import { useState } from 'react';
import { Modal } from '../components/Container/Modal';

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const handleModal = (state: boolean) => setIsOpen(state);
  return (
    <>
      <Modal isOpen={isOpen} handleModal={handleModal} />
      <h3 className="title colored text-4xl mt-2 mb-2 text-center">
        Responde esta encuesta!
      </h3>
      <QuizFormContainer handleModal={handleModal} />
    </>
  );
}

export default Home;
