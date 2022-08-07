import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ArrowButton } from "../../buttons";
import UserIconProps, { MenuItemProps } from "./props";
import { UserIcon as Icon } from "../../";

const classNames = (...classes: string[]) => classes.filter(Boolean).join(" ");

const UserIcon: React.FC<UserIconProps> = ({ user, className }) => {
  return (
    <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:pr-0">
      <Menu as="div" className="ml-3 relative">
        <div>
          {user ? (
            <Menu.Button className="bg-transparent flex text-sm rounded-full">
              <span className="sr-only">Open user menu</span>
              <Icon user={user} />
            </Menu.Button>
          ) : (
            <ArrowButton label="Login" size="sm" href="/login" />
          )}
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item>
              {({ active }: MenuItemProps) => (
                <a
                  href="#profile"
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}
                >
                  Your Profile
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }: MenuItemProps) => (
                <a
                  href="#settings"
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}
                >
                  Settings
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }: MenuItemProps) => (
                <a
                  href="/logout"
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}
                >
                  Sign out
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default UserIcon;
