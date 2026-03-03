const Container = ({ children, className }) => {
  return (
    <div
      className={`${className} relative mx-auto max-w-4xl bg-white dark:bg-black`}
    >
      {children}
    </div>
  );
};
export default Container;
