import { Logo } from "../../components";
import { GridDashboard } from "../../components";
import BoardProps from "./props";

const Board: React.FC<BoardProps> = ({ user }) => {
  return (
    // <>
    // <div className="p-3 flex flex-row">
    //   <Logo hideName className="h-7 mr-2.5" dividerMargin="mx-3" />
    //   <span className="text-2.5xl leading-7 font-display text-mythril-900">
    //     Welcome, {user.name}!
    //   </span>
    // </div>
    // <div className="bg-mythril-700">
    <GridDashboard />
    // </div>
    // </>
  );
};

export default Board;
