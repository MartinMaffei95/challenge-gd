type TextLineProps = {
  name: string;
  value: string;
};
export const TextLine = ({ name, value }: TextLineProps) => {
  return (
    <div className="label-style text-lg pt-1 pb-1 flex justify-between border-b-2">
      <span className="font-semibold">{name}:</span>
      <span>{value}</span>
    </div>
  );
};
