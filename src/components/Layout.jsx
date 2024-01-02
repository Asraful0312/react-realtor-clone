export const Layout = (props) => {
  const { children } = props;
  return (
    <main>
      <div className="container mx-auto">{children}</div>
    </main>
  );
};
