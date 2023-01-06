import { useState } from 'react';
import { useLocation } from 'react-router';
import { Modal } from '../../components/Container/Modal';

type Props = {
  children?: JSX.Element | undefined;
};
const AppLayout = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleModal = (state: boolean) => setIsOpen(state);
  return (
    <div className="p-4">
      <button onClick={() => handleModal(true)}>Abrir</button>
      <Modal isOpen={isOpen} handleModal={handleModal} />
      {children}
    </div>
  );
};

export default AppLayout;
