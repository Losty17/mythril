import GridItemWrapperProps from "./props";

const GridItemWrapper: React.FC<GridItemWrapperProps> = ({
  item,
  children,
}) => {
  return (
    <div className="p-4 rounded-md bg-mythril-300 border border-mythril-700 shadow-md w-full h-full">
      {item.i}
      {children}
    </div>
  );
};

export default GridItemWrapper;
