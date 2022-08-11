import MenuIcon from "@heroicons/react/solid/MenuIcon";
import { Logo } from "../..";
import UserIcon from "../../UserIcon";
import TopbarProps from "./props";

const Topbar: React.FC<TopbarProps> = ({ buttons, isRoot, user }) => {
  return (
    <nav className="w-full fixed z-10 bg-mythril-700">
      <div className="p-3 flex justify-between text-mythril-100">
        <div className="flex flex-row h-8 w-32">
          <MenuIcon className="sm:hidden flex" />
        </div>
        <Logo hideName className="sm:hidden flex m-auto" />
        <div className="leading-7 text-md flex justify-end w-32">
          {isRoot &&
            buttons.map(({ key, iconDefault, iconActive, active, action }) => (
              <button
                className="h-6 w-6 mx-2 my-auto"
                onClick={action}
                key={key}
                id={key}
              >
                {active ? iconActive : iconDefault}
              </button>
            ))}
          <UserIcon user={user} className="ml-3" />
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
