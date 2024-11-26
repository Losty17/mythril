"use client";

import {
  ArrowLeftStartOnRectangleIcon,
  ArrowRightStartOnRectangleIcon,
  BellIcon,
  Cog6ToothIcon,
  MagnifyingGlassIcon,
  MapIcon,
  RectangleGroupIcon,
  UserGroupIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import NavbarButton from "../NavbarButton";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside
      className="bg-base-200 flex flex-col gap-2 p-[11px] box-border"
    >
      <NavbarButton
        onClick={() => {}}
        label="Search"
        expanded={expanded}
        icon={<MagnifyingGlassIcon className="size-6" />}
      />
      <div className="flex-1 flex flex-col gap-2 py-8">
        <NavbarButton
          onClick={() => {}}
          label="Dashboard"
          expanded={expanded}
          icon={<RectangleGroupIcon className="size-6" />}
        />
        <NavbarButton
          onClick={() => {}}
          label="Characters"
          expanded={expanded}
          icon={<UserGroupIcon className="size-6" />}
        />
        <NavbarButton
          onClick={() => {}}
          label="Campaigns"
          expanded={expanded}
          icon={<MapIcon className="size-6" />}
        />
      </div>
      <div className="flex flex-col gap-2">
        <NavbarButton
          onClick={() => setExpanded(!expanded)}
          label="Collapse"
          expanded={expanded}
          expandedIcon={<ArrowLeftStartOnRectangleIcon className="size-6" />}
          collapsedIcon={<ArrowRightStartOnRectangleIcon className="size-6" />}
        />
        <NavbarButton
          onClick={() => {}}
          label="Notifications"
          expanded={expanded}
          icon={<BellIcon className="size-6" />}
        />
        <NavbarButton
          onClick={() => {}}
          label="Settings"
          expanded={expanded}
          icon={<Cog6ToothIcon className="size-6" />}
        />
      </div>
      <div
        data-expanded={expanded}
        className="flex flex-row gap-2 items-center py-4 w-max m-auto data-[expanded='true']:px-4 bg-transparent data-[expanded='true']:bg-base-100 rounded-lg"
      >
        <img
          data-expanded={expanded}
          src="https://avatars.githubusercontent.com/u/45098519?v=4"
          alt=""
          width={48}
          height={48}
          className="rounded-lg size-10"
        /> 
        {expanded && (
          <>
            <div className="flex flex-col">
              Hi, Vinícius!
              <span className="text-xs text-neutral-500">
                vinikappke@gmail.com
              </span>
            </div>
            <EllipsisVerticalIcon />
          </>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
