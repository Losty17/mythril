import {
  BookOpenIcon as NotesIcon,
  InformationCircleIcon as TipIcon,
  MapIcon as CampaignIcon,
  UserGroupIcon as CharactersIcon,
  ViewGridIcon as BoardIcon,
} from "@heroicons/react/solid";
import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { Logo, UserIcon } from "../..";
import SidebarProps from "./props";

const Sidebar: React.FC<SidebarProps> = ({ user }) => {
  const sidePanelButtons = useMemo(
    () => [
      {
        icon: <BoardIcon />,
        href: "",
      },
      {
        icon: <CharactersIcon />,
        href: "/characters",
      },
      {
        icon: <CampaignIcon />,
        href: "/campaigns",
      },
      {
        icon: <NotesIcon />,
        href: "/notes",
      },
    ],
    []
  );
  return (
    <div className="w-[60px] h-full p-3 absolute z-20 text-mythril-100 bg-mythril-700 flex-col justify-between hidden sm:flex fixed">
      <div className="mb-6">
        <Logo hideName className="h-9 m-auto" />
      </div>
      <div className="w-7 mx-auto h-full flex flex-col">
        {sidePanelButtons.map(({ icon, href }, i) => (
          <Link key={i} to={`/app${href}`} className="mb-6">
            {icon}
          </Link>
        ))}
      </div>
      <UserIcon user={user} />
    </div>
  );
};

export default Sidebar;
