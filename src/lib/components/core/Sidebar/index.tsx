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
} from "@heroicons/react/24/outline";
import { useState } from "react";
import NavbarButton from "../NavbarButton";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside
      data-expanded={expanded}
      className="bg-base-200 p-[9px] flex flex-col gap-2 w-full max-w-16 data-[expanded='true']:max-w-64 box-border"
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
      <div className="flex flex-col gap-2 py-4">
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
        className="flex flex-col gap-2 mb-8 bg-transparent data-[expanded='true']:bg-base-100 rounded-lg"
      >
        <img
          src="https://avatars.githubusercontent.com/u/45098519?v=4"
          alt=""
          width={32}
          height={32}
        />
      </div>
    </aside>
  );
};

export default Sidebar;
