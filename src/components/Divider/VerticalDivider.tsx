import { classNames } from "../../utils";

const VerticalDivider = ({ className }: { className?: string }) => (
  <div
    className={classNames(
      "mb-0.5 w-[3px] bg-mythril-700 rounded-md mx-5",
      className
    )}
  />
);

export default VerticalDivider;
