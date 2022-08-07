import React, { PropsWithChildren } from "react";
import { User } from "../../types";

export default interface HomeProps extends PropsWithChildren {
  user?: User;
}
