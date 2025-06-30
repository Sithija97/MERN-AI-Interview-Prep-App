type IProps = {
  children?: React.ReactNode;
  isOpen: boolean;
  title: string;
  onClose: () => void;
  hideHeader?: boolean;
};

export const Modal = ({ children, onClose, title, hideHeader }: IProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black/40">
      {/* modal content */}
      <div className="relative flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
        {/* modal header */}
        {!hideHeader && (
          <div className="flex items-center justify-between p-4">
            <h3 className="md:text-lg font-medium text-gray-900">{title}</h3>
          </div>
        )}

        <button
          type="button"
          className="text-gray-400 bg-transparent hover:bg-blue-100 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center absolute top-3.5 right-3.5 cursor-pointer"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 24 24"
            className="w-3 h-3"
          >
            <path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z"></path>
          </svg>
        </button>

        {/* modal body */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
};
