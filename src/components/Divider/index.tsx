import HorizontalDivider from "./HorizontalDivider";
import DividerProps from "./props";
import VerticalDivider from "./VerticalDivider";

const Divider: React.FC<DividerProps> = ({ vertical }) =>
  vertical ? <VerticalDivider /> : <HorizontalDivider />;

export default Divider;
export { HorizontalDivider, VerticalDivider };
