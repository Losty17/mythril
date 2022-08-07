import React, { PropsWithChildren } from "react";
import { Layout } from "../../types/Board";

export default interface GridItemWrapperProps extends PropsWithChildren {
  item: Layout;
}
