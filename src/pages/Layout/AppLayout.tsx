type Props = {
  children?: JSX.Element | undefined;
};
const AppLayout = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default AppLayout;
