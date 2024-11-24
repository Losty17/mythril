import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-row w-screen h-screen items-center justify-center">
      {children}
    </div>
  );
};

export default Layout;
