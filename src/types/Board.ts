import ReactGridLayout from "react-grid-layout";

interface Layout extends ReactGridLayout.Layout {
  type?: string;
}
interface Layouts {
  [P: string]: Layout[];
}
interface GridLocalStorage {
  layouts?: {
    lg?: Layout[];
    md?: Layout[];
    sm?: Layout[];
    xs?: Layout[];
    xxs?: Layout[];
  };
}
type Breakpoint = "lg" | "md" | "sm" | "xs" | "xxs";
type LocalStorageKey = "layouts";

export type { Breakpoint, LocalStorageKey, GridLocalStorage, Layout, Layouts };
