import { Bell, PencilRuler, Search, Share2, UserCircle2 } from "lucide-react";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-10 py-3">
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
      <div className="flex gap-10">
        <Bell size={25} className="hover:text-yellow-700 iconStyle" />
        <UserCircle2 size={25} className=" hover:text-blue-600 iconStyle" />
        <Share2 size={25} className="hover:text-green-600 iconStyle" />
      </div>
    </div>
  );
};
export default Header;
