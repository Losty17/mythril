import {
  CheckIcon,
  LockClosedIcon,
  LockOpenIcon,
  PencilIcon,
} from "@heroicons/react/solid";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { GridDashboard } from "../../components";
import { Sidebar, Topbar } from "../../components/GridComponents";
import { MenuButton } from "../../components/GridComponents/Topbar/props";
import { useAppSelector } from "../../hooks";
import { classNames, navigate } from "../../utils";
import { CharactersPane } from "./panes";
import BoardProps from "./props";
import "./styles.css";

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
      <Sidebar />
      <Topbar user={user} isRoot={isRoot} buttons={menuButtons} />
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
