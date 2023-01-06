import QuizFormContainer from '../components/Container/QuizFormContainer';
import { useState } from 'react';
import { useLocation } from 'react-router';
import { Modal } from '../components/Container/Modal';
function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const handleModal = (state: boolean) => setIsOpen(state);
  return (
    <>
      <Modal isOpen={isOpen} handleModal={handleModal} />
      <h3 className="title">Responde esta encuesta!</h3>
      <QuizFormContainer handleModal={handleModal} />
    </>
  );
}

export default Home;
