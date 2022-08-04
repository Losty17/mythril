import { PropsWithChildren } from "react";
import { Layout } from "../GridDashboard/interfaces";

export default interface GridItemWrapperProps extends PropsWithChildren {
  item: Layout;
}
