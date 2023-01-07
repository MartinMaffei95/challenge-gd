type Props = {
  children?: JSX.Element | undefined;
};
const AppLayout = ({ children }: Props) => {
  return <div className="p-4 bg-neutral-50 h-screen w-screen ">{children}</div>;
};

export default AppLayout;
