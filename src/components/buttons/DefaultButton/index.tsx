import { classNames } from "../../../utils";
import DefaultButtonProps from "./props";

const DefaultButton: React.FC<DefaultButtonProps> = ({
  type,
  label,
  className,
}) => {
  return (
    <button
      type={type}
      className={classNames(
        "flex text-center justify-center rounded-md text-white bg-mythril-700 hover:bg-mythril-900 transition duration-150 active:scale-[.98] p-2 text-sm mt-4 mx-auto",
        className
      )}
    >
      {label}
    </button>
  );
};

export default DefaultButton;
