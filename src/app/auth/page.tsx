import { redirect } from "next/navigation";

/**
 * this middle page purpose is to provide the common
 * layout for the register and login page, thus we
 * shall only redirect the user to one of those pages
 */
const Auth = () => redirect("/login");
export default Auth;
