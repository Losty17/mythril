import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import React from "react";
import { navigate } from "../../utils";
import scrollTo from "../../utils/scrollTo";
import Logo from "../Logo";
import NavbarProps from "./props";
import UserIcon from "./UserIcon";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Pricing", href: "#pricing" },
  { name: "Blog", href: "blog" },
  { name: "Board", href: "app" },
];

const Navbar: React.FC<NavbarProps> = ({ user }) => {
  const handleClickMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    const ref = event.currentTarget.getAttribute("href");
    if (ref) {
      if (ref.startsWith("#")) scrollTo(ref.replace("#", ""));
      else navigate(ref);
    }
  };

  return (
    <Disclosure as="nav" className="transparent">
      {({ open }) => (
        <>
          <div className="max-w-full mx-auto px-2 sm:px-4 lg:px-6 select-none">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="text-mythril-900 inline-flex items-center justify-center p-2 rounded-md">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <Logo divider />
                <div className="hidden sm:block sm:ml-4">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={handleClickMenu}
                        className="text-mythril-700 hover:bg-mythril-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              {/* Profile dropdown */}
              <UserIcon user={user} />
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  onClick={handleClickMenu}
                  className="text-mythril-700 hover:bg-mythril-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
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

export default Navbar;
