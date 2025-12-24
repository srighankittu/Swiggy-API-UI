import { NAV_LOGO } from "../utils/Constants";

const Footer = () => {
  return (
    <div className="fixed bottom-0 bg-gray-300 w-full">
      <div className="flex justify-between items-center">
        <div className="w-10 m-8">
          <img src={NAV_LOGO} />
          <p className="w-60">© 2025 All Rights are Reserved</p>
          <p className="w-40">♥ Built with heast</p>
        </div>
        <ul className="flex gap-20 m-8">
          <li>Contact Us</li>
          <li>Company</li>
          <li>Available in</li>
          <li>Legal</li>
          <li>Social links</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
