import { classNames } from "../../utils";

const HorizontalDivider = ({ className }: { className?: string }) => (
  <div
    className={classNames(
      "h-[3px] w-9/12 bg-mythril-300 rounded-md m-auto mt-2",
      className
    )}
  />
);

export default HorizontalDivider;
