import { forwardRef, PropsWithChildren } from "react";
import { classNames } from "../../utils";

interface BoardContainerProps extends PropsWithChildren {
  className?: string;
}

const BoardContainer = forwardRef<HTMLDivElement, BoardContainerProps>(
  ({ children, className }, ref) => (
    <div
      ref={ref}
      className={classNames(
        "text-mythril-100 p-[10px] flex flex-row",
        className
      )}
    >
      {children}
    </div>
  )
);

export default BoardContainer;
