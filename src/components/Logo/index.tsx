import { classNames } from "../../utils";
import LogoProps from "./props";

const Logo: React.FC<LogoProps> = ({
  divider,
  hideName,
  className,
  dividerMargin,
}) => {
  return (
    <div
      className={classNames(
        "flex-shrink-0 flex items-center justify-evenly",
        className
      )}
    >
      {hideName ? (
        <img src="/diamond.svg" alt="" />
      ) : (
        <>
          <img src="/diamond.svg" alt="" />
          <span className="m-1.5" />
          <span className="hidden cursor-default text-mythril-700 sm:flex font-display text-3xl">
            MYTHRIL
          </span>
        </>
      )}
      {divider && (
        <span
          className={classNames(
            "w-1 h-1 hidden sm:block rounded-full bg-mythril-700",
            dividerMargin || "ml-4"
          )}
        />
      )}
    </div>
  );
};

export default Logo;
