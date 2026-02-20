const Container = ({ children, className }) => {
  return <div className={`${className} max-w-4xl mx-auto flex justify-center items-center`}>{children}</div>;
};
export default Container;
