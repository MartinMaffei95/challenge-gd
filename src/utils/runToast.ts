import { toast } from 'react-toastify';

export const runToast = (type: 'ERROR', text: string) => {
  switch (type) {
    case 'ERROR':
      return toast.error(`${text}`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });

    default:
      break;
  }
};
