import { useState } from "react";
import GridLayout from "react-grid-layout";
import GridItemWrapper from "../GridItemWrapper";
import { Layout } from "./interfaces";

let counter = 3;

const GridDashboard: React.FC = () => {
  const [widgets, setWidgets] = useState<Layout[]>([
    { i: "widget0", x: 0, y: 0, w: 1, h: 2, static: false },
    { i: "widget1", x: 1, y: 0, w: 1, h: 2, minW: 2, maxW: 4 },
    { i: "widget2", x: 2, y: 0, w: 1, h: 2 },
  ]);

  const handleChangeLayout = (newLayout: GridLayout.Layout[]) => {
    setWidgets(newLayout);
  };

  const addWidget = () => {
    setWidgets((oldWidgets) => [
      ...oldWidgets,
      { i: `widget${counter}`, x: counter, y: 0, w: 1, h: 2, type: "user" },
    ]);

    counter++;
  };

  return (
    <div>
      <button onClick={addWidget}>Add</button>
      <GridLayout
        layout={widgets}
        cols={16}
        rowHeight={30}
        width={16 * 100}
        style={{ userSelect: "none" }}
        verticalCompact={false}
        onLayoutChange={handleChangeLayout}
      >
        {widgets.map((item: Layout) => (
          <div
            key={item.i}
            data-grid={{
              x: item.x,
              y: item.y,
              w: item.w,
              h: item.h,
              i: item.i,
              minW: item.minW || 1,
              maxW: item.maxW || Infinity,
              minH: item.minH || 1,
              maxH: item.maxH || Infinity,
              isDraggable: item.isDraggable || true,
              isResizable: item.isResizable || true,
              isBounded: item.isBounded || false,
            }}
          >
            <GridItemWrapper item={item} />
          </div>
        ))}
      </GridLayout>
    </div>
  );
};

export default GridDashboard;
