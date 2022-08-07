import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import useLocalStorage from "../../hooks/useLocalStorage";
import { Breakpoint, Layout, Layouts } from "../../types";
import { classNames } from "../../utils";
import GridItemWrapper from "../GridItemWrapper";

const ResponsiveGridLayout = WidthProvider(Responsive);

const widths = { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 };

const exampleLayouts: Layouts = {
  lg: [
    {
      i: "user@@0",
      x: 0,
      y: 0,
      w: 1,
      h: 1,
    },
    {
      i: "character@@1",
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
      i: "character@@4",
      x: 4,
      y: 0,
      w: 1,
      h: 1,
    },
  ],
};

interface DashboardProps extends PropsWithChildren {
  isLocked?: boolean;
  isEditing: boolean;
  className?: string;
}

const GridDashboard: React.FC<DashboardProps> = ({
  className,
  isLocked,
  isEditing,
}) => {
  const ls = useLocalStorage("rgl8");
  const originalLayouts = ls.getLayouts() || exampleLayouts || {};
  const [hasWidgetUpdated, setWidgetUpdated] = useState(false);
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
    (newBreakpoint: Breakpoint, newCols: number) => {
      setActiveLayout((oldLayout) => layouts[newBreakpoint] || oldLayout);
    },
    [layouts]
  );

  const handleItemBounds = (item: Layout) => {
    const type = item.i.split("@@")[0];
    const layout = item;
    let widget = <></>;

    switch (type) {
      case "user":
        widget = (
          <p>
            custom widget <br /> user
          </p>
        );
        layout.minH = 5;
        if (layout.h < 5) layout.h = 5;
        break;

      case "character":
        widget = (
          <p>
            custom widget <br /> character
          </p>
        );
        layout.minH = 3;
        layout.minW = 2;
        if (layout.h < 3) layout.h = 3;
        if (layout.w < 2) layout.w = 2;
        break;

      default:
        widget = (
          <p>
            custom widget <br /> none
          </p>
        );
        layout.minH = 1;
        layout.minW = 1;
        break;
    }

    return { layout, widget };
  };

  useEffect(() => setWidgetUpdated(false), [hasWidgetUpdated]);

  return (
    <div className="h-full">
      <div id="content"></div>
      <ResponsiveGridLayout
        className={classNames("layout", className)}
        breakpoints={widths}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={103}
        compactType="vertical"
        layouts={layouts}
        onLayoutChange={handleLayoutChange}
        onBreakpointChange={handleBreakpointChange}
        isDraggable={!isLocked}
        isResizable={!isLocked}
      >
        {activeLayout.map((item, i) => {
          const { layout, widget } = handleItemBounds(item);
          return (
            <div key={layout.i} data-grid={layout}>
              {/* <GridItemWrapper item={layout}> */}
              <div className="h-full w-full text-center">
                {i}
                {widget}
              </div>
              {/* </GridItemWrapper> */}
            </div>
          );
        })}
      </ResponsiveGridLayout>
    </div>
  );
};

export default GridDashboard;
