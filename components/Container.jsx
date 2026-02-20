const Container = ({ children, className }) => {
  return <div className={`${className} bg-white dark:bg-black max-w-4xl mx-auto  `}>{children}</div>;
}; 
export default Container;
