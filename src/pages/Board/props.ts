import React from "react";
import { User } from "../../types";

export default interface BoardProps extends React.HTMLProps<HTMLDivElement> {
  user: User;
}
