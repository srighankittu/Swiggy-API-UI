import { Link } from "react-router-dom";
import { NAV_LOGO } from "../utils/Constants";
//Links
const TopNav = () => {
  return (
    <div className="flex bg-gray-200 justify-between">
      <div className="w-[50px]">
        <img src={NAV_LOGO} />
      </div>
      <div className="m-3 flex">
        <Link className="ml-1.5 mr-1.5" to={"about"}>
          About
        </Link>
        <Link className="ml-1.5 mr-1.5" to={"sign-in"}>
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default TopNav;
