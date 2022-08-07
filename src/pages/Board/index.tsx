// import { Logo } from "../../components";
import { useEffect } from "react";
import { GridDashboard, Logo } from "../../components";
import { useAppSelector } from "../../hooks";
import { navigate } from "../../utils";
import BoardProps from "./props";

const Board: React.FC<BoardProps> = () => {
  const user = useAppSelector((state) => state.user.value);

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user]);

  return (
    <>
      {user && (
        <div className="grid-dashboard-container min-h-screen">
          <div className="p-3 flex flex-row">
            <Logo hideName className="h-7 mr-2.5" dividerMargin="mx-3" />
            <span className="text-2.5xl leading-7 font-display text-mythril-100">
              Welcome, {user?.name}!
            </span>
          </div>
          <GridDashboard />
        </div>
      )}
    </>
  );
};

export default Board;
