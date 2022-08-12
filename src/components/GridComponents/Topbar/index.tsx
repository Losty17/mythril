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

const Topbar: React.FC<TopbarProps> = ({ user }) => {
  return (
    <Disclosure
      as="nav"
      className="w-full h-12 fixed z-10 bg-transparent sm:hidden"
    >
      {({ open }) => (
        <>
          <div className="p-1 flex justify-between text-mythril-100 bg-mythril-700">
            <Disclosure.Button className="h-full inline-flex items-center justify-center p-2 rounded-md">
              {open ? (
                <XIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </Disclosure.Button>
            <Logo hideName className="m-auto" />
            <UserIcon user={user} />
          </div>
          <Disclosure.Panel className="sm:hidden bg-mythril-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={`/app/${item.href}`}
                  className="text-white hover:bg-mythril-300 hover:text-mythril-700 block px-3 py-2 rounded-md"
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
