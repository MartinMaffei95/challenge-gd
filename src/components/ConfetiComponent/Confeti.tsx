import Confetti from 'react-confetti';
import { useResize } from '../../Hooks/useResize';

export const Confeti = () => {
  const { width, height } = useResize();
  return <Confetti width={width} height={height} />;
};
