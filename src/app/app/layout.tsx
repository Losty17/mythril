import Navbar from "@/lib/components/core/Navbar";
import Sidebar from "@/lib/components/core/Sidebar";
import { PropsWithChildren } from "react";

const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-row w-screen h-screen">
      <Sidebar />
      <div className="flex flex-col w-full h-full">
        <Navbar />
        <div className="h-full w-full">{children}</div>
      </div>
    </div>
  );
};

export default AppLayout;
