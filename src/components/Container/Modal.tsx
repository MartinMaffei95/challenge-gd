import { useResize } from '../../Hooks/useResize';
import GratzPage from '../../pages/GratzPage';
import Confetti from 'react-confetti';

type ModalProps = {
  isOpen: boolean;
  handleModal: Function;
};
export function Modal({ isOpen, handleModal }: ModalProps) {
  //  overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none
  const { width, height } = useResize();

  return (
    <div>
      {isOpen ? (
        <>
          <div className="flex justfy-center h-screen w-screen bg-red-500 top-0 left-0 absolute z-50 m-auto overflow-x-hidden">
            <Confetti width={width} height={height} />

            <div className=" p-5 border-0  border-gray-300 rounded-lg shadow-lg relative flex flex-col w-5/6 h-5/6 bg-white outline-none focus:outline-none rounded-t m-auto">
              <GratzPage handleModal={handleModal} />
              {/* <p onClick={() => handleModal(false)}>Cerrar</p> */}
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
