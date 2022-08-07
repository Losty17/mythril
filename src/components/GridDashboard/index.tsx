import React, { PropsWithChildren, useCallback, useState } from "react";
import { Layouts, Responsive, WidthProvider } from "react-grid-layout";
import useLocalStorage from "../../hooks/useLocalStorage";
import { Layout } from "./interfaces.js";
import "./styles.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

const exampleLayouts: Layouts = {
  lg: [
    {
      i: "0",
      x: 0,
      y: 0,
      w: 1,
      h: 1,
    },
    {
      i: "1",
      x: 1,
      y: 0,
      w: 1,
      h: 1,
    },
    {
      i: "2",
      x: 2,
      y: 0,
      w: 1,
      h: 1,
    },
    {
      i: "3",
      x: 3,
      y: 0,
      w: 1,
      h: 1,
    },
    {
      i: "4",
      x: 4,
      y: 0,
      w: 1,
      h: 1,
    },
  ],
};

interface DashboardProps extends PropsWithChildren {
  onLayoutChange?: (layout: Layout) => void;
}

const GridDashboard: React.FC<DashboardProps> = () => {
  const ls = useLocalStorage("rgl8");
  const originalLayouts = ls.getLayouts() || exampleLayouts || {};
  const [layouts, setLayouts] = useState<Layouts>(originalLayouts);
  const [activeLayout, setActiveLayout] = useState<Layout[]>(
    originalLayouts.lg || []
  );

  const handleLayoutChange = useCallback(
    (currentLayout: Layout[], allLayouts: Layouts) => {
      const newLayouts = { ...layouts, ...allLayouts };
      ls.save("layouts", newLayouts);
      setLayouts(newLayouts);
      setActiveLayout(currentLayout);
    },
    [layouts, ls]
  );

  const handleBreakpointChange = useCallback(
    (newBreakpoint: string) => {
      setActiveLayout((oldLayout) => layouts[newBreakpoint] || oldLayout);
    },
    [layouts]
  );

  return (
    <div className="h-full">
      <div id="content"></div>
      <ResponsiveGridLayout
        className="layout"
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={103}
        compactType={null}
        layouts={layouts}
        onLayoutChange={handleLayoutChange}
        onBreakpointChange={handleBreakpointChange}
      >
        {activeLayout.map((item) => (
          <div key={item.i} data-grid={item}>
            <span className="text">{item.i}</span>
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
};

export default GridDashboard;
