import { useResize } from '../../Hooks/useResize';
import GratzPage from '../../pages/GratzPage';
import Confetti from 'react-confetti';

type ModalProps = {
  isOpen: boolean;
  handleModal: Function;
};
export function Modal({ isOpen, handleModal }: ModalProps) {
  const { width, height } = useResize();

  return (
    <div>
      {isOpen ? (
        <div className="bg-gradient-to-tl from-red-200 to-neutral-400">
          <div className="flex justfy-center h-screen w-screen bg-slate-800 bg-opacity-60 top-0 left-0 absolute z-50 m-auto overflow-x-hidden ">
            <Confetti width={width} height={height} />

            <div className=" p-5 border-0 border-gray-300 rounded-lg shadow-lg relative flex flex-col w-5/6 h-5/6 bg-white outline-none focus:outline-none rounded-t m-auto bg-gradient-to-br from-white to-neutral-100">
              <GratzPage handleModal={handleModal} />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
