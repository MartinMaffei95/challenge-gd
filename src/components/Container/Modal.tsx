import { MouseEvent, MouseEventHandler, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import GratzPage from '../../pages/GratzPage';

type ModalProps = {
  isOpen: boolean;
  handleModal: Function;
};
export function Modal({ isOpen, handleModal }: ModalProps) {
  return (
    <div>
      {isOpen ? (
        <div className=" h-screen w-screen bg-red-500 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className=" p-5 border-0  border-gray-300 rounded-lg shadow-lg relative flex flex-col w-5/6 h-5/6 bg-white outline-none focus:outline-none rounded-t">
            <GratzPage />
            <p onClick={() => handleModal(false)}>Cerrar</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
