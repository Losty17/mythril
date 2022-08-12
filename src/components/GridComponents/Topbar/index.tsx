import { Disclosure } from "@headlessui/react";
import { XIcon } from "@heroicons/react/solid";
import MenuIcon from "@heroicons/react/solid/MenuIcon";
import { Logo } from "../..";
import UserIcon from "../../UserIcon";
import TopbarProps from "./props";

const navigation = [
  { name: "Board", href: "" },
  { name: "Characters", href: "/characters" },
  { name: "Campaigns", href: "/campaigns" },
  { name: "Notes", href: "/notes" },
];

const Topbar: React.FC<TopbarProps> = ({ buttons, isRoot, user }) => {
  return (
    <Disclosure as="nav" className="w-full h-12 fixed z-10 bg-mythril-700">
      {({ open }) => (
        <>
          <div className="p-1 flex justify-between text-mythril-100">
            <div className="flex flex-row h-8 w-32">
              <Disclosure.Button className="text-mythril-100 inline-flex items-center justify-center p-2 rounded-md">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            <Logo hideName className="sm:hidden flex m-auto" />
            <div className="leading-7 text-md flex justify-end w-32">
              {isRoot &&
                buttons.map(
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
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={`/app/${item.href}`}
                  className="text-mythril-100 hover:bg-mythril-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Topbar;
