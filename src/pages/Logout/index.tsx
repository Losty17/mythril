import { useEffect } from "react";
import { removeUser } from "../../features";
import { useAppDispatch } from "../../hooks";
import { navigate } from "../../utils";
import LogoutProps from "./props";

const Logout: React.FC<LogoutProps> = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(removeUser());
    localStorage.removeItem("user");
    navigate("/");
  }, [dispatch]);

  return <></>;
};

export default Logout;
