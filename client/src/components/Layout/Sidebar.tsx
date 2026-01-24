import {
  File,
  Link,
  Plus,
  TagIcon,
  Twitter,
  UserCircle2,
  Youtube,
} from "lucide-react";
import { Button } from "../UI/Button";
import { useState } from "react";
import CreateContentModal from "../UI/CreateContentModal";

const Sidebar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="flex items-center flex-col">
      {/* Add Content Button */}
      <Button
        startIcon={<Plus size={25} />}
        text="Add Content"
        varient="secondary"
        onClick={() => setIsModalOpen(true)}
      />

      {/* Create Content Modal */}
      <CreateContentModal
        isModalOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Routes */}
      <div className="mt-10 flex flex-col space-y-3 px-5">
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

      {/* User Profile */}
      <div className="flex items-center md:mt-45 gap-2 hover:bg-blue-700 p-1 px-2 rounded-2xl transition duration-200">
        <UserCircle2 size={40} />
        <div>
          <h1 className="text-sm">Lokendra Nath</h1>
          <p className="text-xs">lokendra@gmail.com</p>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
