import { File, Link, Plus, TagIcon, Twitter, Youtube } from "lucide-react";
import { Button } from "../UI/Button";

const Sidebar = () => {
  return (
    <div className="flex items-center flex-col">
      {/* Add Content Button */}
      <Button
        startIcon={<Plus size={25} />}
        text="Add Content"
        varient="secondary"
      />
      {/* Routes */}
      <div className="mt-10 flex items-center flex-col space-y-3">
        {/* Tweet */}
        <div className="flex gap-2 items-center px-5 py-2 rounded-full hover:bg-blue-100 hover:text-blue-600 transition duration-300">
          <Twitter size={20} />{" "}
          <span className="font-semibold text-md">Twitter</span>
        </div>
        {/* Video */}
        <div className="flex gap-2 items-center px-5 py-2 rounded-full hover:bg-blue-100 hover:text-blue-600 transition duration-300">
          <Youtube size={20} />{" "}
          <span className="font-semibold text-md">Video</span>
        </div>
        {/* Docs */}
        <div className="flex gap-2 items-center px-5 py-2 rounded-full hover:bg-blue-100 hover:text-blue-600 transition duration-300">
          <File size={20} /> <span className="font-semibold text-md">Docs</span>
        </div>

        {/* Link */}
        <div className="flex gap-2 items-center px-5 py-2 rounded-full hover:bg-blue-100 hover:text-blue-600 transition duration-300">
          <Link size={20} /> <span className="font-semibold text-md">Link</span>
        </div>
        {/* Tag */}
        <div className="flex gap-2 items-center px-5 py-2 rounded-full hover:bg-blue-100 hover:text-blue-600 transition duration-300">
          <TagIcon size={20} />{" "}
          <span className="font-semibold text-md">Tag</span>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
