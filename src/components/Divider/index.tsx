import HorizontalDivider from "./HorizontalDivider";
import DividerProps from "./props";
import VerticalDivider from "./VerticalDivider";

const Divider: React.FC<DividerProps> = ({ vertical, className }) =>
  vertical ? (
    <VerticalDivider className={className} />
  ) : (
    <HorizontalDivider className={className} />
  );

export default Divider;
export { HorizontalDivider, VerticalDivider };
