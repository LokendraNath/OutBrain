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
import SidebarIcon from "../UI/SidebarIcon";

const Sidebar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="flex justify-between items-center flex-col h-full pb-20">
      <div>
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
        <div className="mt-6 flex flex-col space-y-3">
          <SidebarIcon leftIcon={<Twitter size={25} />} text="Twitter" />
          <SidebarIcon leftIcon={<Youtube size={25} />} text="Youtube" />
          <SidebarIcon leftIcon={<File size={25} />} text="Docs" />
          <SidebarIcon leftIcon={<Link size={25} />} text="Link" />
          <SidebarIcon leftIcon={<TagIcon size={25} />} text="Tag" />
        </div>
      </div>
      {/* User Profile */}
      <div className="flex items-center md:mt-50 gap-2 hover:bg-blue-700 p-1 px-2 rounded-2xl transition duration-200">
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
