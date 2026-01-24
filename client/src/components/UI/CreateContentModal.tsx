import { Plus, XCircleIcon } from "lucide-react";
import { Button } from "./Button";

interface CreateContentModalProps {
  isModalOpen: boolean;
  onClose: () => void;
}

const CreateContentModal = ({
  isModalOpen,
  onClose,
}: CreateContentModalProps) => {
  return (
    <div>
      {isModalOpen && (
        <div
          className="h-screen w-screen bg-black/70 fixed top-0 left-0 flex justify-center items-center"
          onClick={onClose}
        >
          <div className="relative bg-white rounded-md min-w-sm h-60 flex text-black items-center flex-col py-5 px-10">
            {/* Close Button */}
            <button
              className="absolute top-1 right-1
          text-red-600 cursor-pointer"
              onClick={onClose}
            >
              <XCircleIcon />
            </button>
            {/* Main Content */}
            <h1 className="text-xl mb-5 font-bold">Add Content</h1>
            <input type="text" placeholder="Title" className="inputBoxStyle" />
            <input type="text" placeholder="Link" className="inputBoxStyle" />
            <Button
              varient="primary"
              text="Add Content"
              startIcon={<Plus size={25} />}
              className="mt-3"
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default CreateContentModal;
