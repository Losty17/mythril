import { useEffect, useState } from "react";
import GridItemWrapperProps from "./props";

const GridItemWrapper: React.FC<GridItemWrapperProps> = ({ item }) => {
  const [widget, setWidget] = useState<JSX.Element | null>(null);

  useEffect(() => {
    let customWidget;

    switch (item.type) {
      case "user":
        customWidget = <div>Dasdasdads</div>;
        break;

      default:
        customWidget = <div>not found</div>;
    }
    setWidget(customWidget);
  }, [item.type]);

  return (
    <div className="p-4 rounded-md bg-mythril-300 border border-mythril-700 shadow-md w-full h-full">
      {item.i}
      {widget}
    </div>
  );
};

export default GridItemWrapper;
