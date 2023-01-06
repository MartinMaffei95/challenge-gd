import QuizFormContainer from '../components/Container/QuizFormContainer';

export function GratzPage() {
  return (
    <>
      <h3 className="title">Felicitaciones!</h3>
      <span>Excelente! Completaste el formulario. </span>
      <span>
        Deseas ver los resultados parciales de la encuesta? O realizarla
        nuevamente?
      </span>
    </>
  );
}

export default GratzPage;
