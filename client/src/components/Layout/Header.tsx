import { Bell, PencilRuler, Search, Share2, UserCircle2 } from "lucide-react";
import { Button } from "../UI/Button";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-10 py-5">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <PencilRuler size={40} />
        <h1 className="text-3xl">OutBrain</h1>
      </div>
      {/* Seach Box */}
      <div className="py-2 pl-4 w-72 bg-white shadow-md outline-none rounded-full flex items-center">
        <Search size={20} className="text-gray-700" />
        <input
          type="text"
          placeholder="Search"
          className=" border-none outline-none pl-3 text-gray-700"
        />
      </div>
      {/* Icons */}
      <div className="flex gap-5 items-center">
        <Bell size={23} className="hover:text-yellow-700 iconStyle" />
        <Button
          text="Share Brain"
          startIcon={<Share2 size={20} />}
          varient="primary"
        />
      </div>
    </div>
  );
};
export default Header;
