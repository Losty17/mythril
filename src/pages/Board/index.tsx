import "./styles.css";
import {
  CheckIcon,
  LockClosedIcon,
  LockOpenIcon,
  PencilIcon,
  MenuIcon,
  ViewGridIcon as BoardIcon,
  UserGroupIcon as CharactersIcon,
  InformationCircleIcon as TipIcon,
  MapIcon as CampaignIcon,
  BookOpenIcon as NotesIcon,
} from "@heroicons/react/solid";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { GridDashboard, Logo, UserIcon } from "../../components";
import { useAppSelector } from "../../hooks";
import { classNames, navigate } from "../../utils";
import BoardProps from "./props";
import { CharactersPane } from "./panes";

interface MenuButton {
  key: string;
  iconDefault: JSX.Element;
  iconActive: JSX.Element;
  active: boolean;
  action: (evt: React.MouseEvent) => void;
}

const Board: React.FC<BoardProps> = () => {
  const [editActive, setEditActive] = useState(false);
  const [locked, setLocked] = useState(true);
  const user = useAppSelector((state) => state.user.value);
  const path = useLocation();

  const handleEditElements = useCallback((evt: React.MouseEvent) => {
    setEditActive((active) => !active);
  }, []);
  const handleUnlockBoard = useCallback((evt: React.MouseEvent) => {
    setLocked((locked) => !locked);
  }, []);

  const menuButtons: MenuButton[] = useMemo(
    () => [
      {
        key: "editElements",
        iconDefault: <PencilIcon />,
        iconActive: <CheckIcon />,
        active: editActive,
        action: handleEditElements,
      },
      {
        key: "unlockBoard",
        iconDefault: <LockOpenIcon />,
        iconActive: <LockClosedIcon />,
        active: locked,
        action: handleUnlockBoard,
      },
    ],
    [editActive, handleEditElements, locked, handleUnlockBoard]
  );

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

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user]);

  const isRoot = ["/app", "/app/"].includes(path.pathname);

  return (
    <div
      className={classNames(
        "grid-dashboard-container min-h-screen overflow-x-hidden select-none h-screen",
        !isRoot ? "overflow-y-hidden" : ""
      )}
    >
      {/* Sidebar */}
      <div className="w-[60px] h-full p-3 absolute z-15 text-mythril-100 flex-col justify-between hidden sm:flex">
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
        <TipIcon className="w-5 mx-auto" />
      </div>
      {/* Top Bar */}
      <nav className="w-full fixed z-10 backdrop-blur-lg bg-gradient-to-bl from-mythril-700 via-transparent">
        <div className="p-3 flex justify-end text-mythril-100">
          <MenuIcon className="sm:hidden flex w-32 h-8" />
          <div className="leading-7 text-md flex justify-evenly">
            {isRoot &&
              menuButtons.map(
                ({ key, iconDefault, iconActive, active, action }) => (
                  <button
                    className="h-6 w-6 mx-2 my-auto"
                    onClick={action}
                    key={key}
                    id={key}
                  >
                    {active ? iconActive : iconDefault}
                  </button>
                )
              )}
            <UserIcon user={user} className="ml-3" />
          </div>
        </div>
      </nav>

      <div
        className={classNames(
          "sm:ml-[60px] ml-0 pt-[60px]",
          !isRoot ? "overflow-x-auto h-full" : ""
        )}
      >
        <Routes>
          <Route
            index
            element={<GridDashboard isEditing={editActive} isLocked={locked} />}
          />
          <Route path="/characters" element={<CharactersPane />} />
          <Route
            path="/campaigns"
            element={
              <div className="text-mythril-100 p-[10px]">Campaigns Page</div>
            }
          />
          <Route
            path="/notes"
            element={
              <div className="text-mythril-100 p-[10px]">Notes Page</div>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default Board;
