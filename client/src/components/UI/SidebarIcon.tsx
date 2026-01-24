import type { ReactElement } from "react";

interface SidebarIconProp {
  text: string;
  leftIcon: ReactElement;
}

const SidebarIcon = ({ text, leftIcon }: SidebarIconProp) => {
  return (
    <div className="flex gap-2 items-center px-5 py-2 rounded-full hover:bg-blue-100 hover:text-blue-600 transition duration-300">
      {leftIcon}
      <span className="font-semibold text-[17px]">{text}</span>
    </div>
  );
};
export default SidebarIcon;
