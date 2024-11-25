import { NavbarButtonProps } from "./types";

const NavbarButton = ({
  onClick,
  icon,
  label,
  expanded,
  expandedIcon,
  collapsedIcon,
}: NavbarButtonProps) => {
  return (
    <button
      className="btn btn-ghost btn-md p-2 justify-start gap-4"
      onClick={onClick}
    >
      {!!icon ? icon : expanded ? expandedIcon : collapsedIcon}
      {expanded && <span className="flex-1 flex justify-start">{label}</span>}
    </button>
  );
};

export default NavbarButton;
