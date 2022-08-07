import { UserCircleIcon } from "@heroicons/react/solid";
import { User } from "../../types";
import { classNames } from "../../utils";

interface UserIconProps {
  user?: User;
  className?: string;
}

const UserIcon: React.FC<UserIconProps> = ({ user, className }) => (
  <div className={classNames("h-9 w-9 my-auto", className)}>
    {user?.avatar ? (
      <img
        className="rounded-full border border-mythril-500"
        src={user.avatar}
        alt=""
      />
    ) : (
      <UserCircleIcon className="rounded-full text-mythril-300" />
      // <div  />
    )}
  </div>
);

export default UserIcon;
