import { Link } from "react-router-dom";
//Links
const TopNav = () => {
  return (
    <div className="flex bg-gray-200 justify-between">
      <div className="w-[50px]">
        <img
          src={
            "https://www.transparentpng.com/download/free/i42mgQ-round-red-free-written-professional-transparent-logo-design-photoshop-money-laborless.png"
          }
        />
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
