type Props = {
  children?: JSX.Element | undefined;
};
const AppLayout = ({ children }: Props) => {
  return <div className="p-4">{children}</div>;
};

export default AppLayout;
