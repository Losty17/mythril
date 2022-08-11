import { User } from "../../../types";

export interface MenuButton {
  key: string;
  iconDefault: JSX.Element;
  iconActive: JSX.Element;
  active: boolean;
  action: (evt: React.MouseEvent) => void;
}
export default interface TopbarProps {
  user?: User;
  isRoot: boolean;
  buttons: MenuButton[];
}
