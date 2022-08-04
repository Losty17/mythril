import ContainerProps from "./props";

const Container: React.FC<ContainerProps> = ({ children, className, id }) => {
  return (
    <div
      className={`mt-48 max-w-[90%] sm:max-w-[60%] m-auto ${className || ""}`}
      id={id || ""}
    >
      {children}
    </div>
  );
};

export default Container;
