import { Check } from "lucide-react";

type IProps = {
  title: string;
  description: string;
  createdAt: string;
  completed: boolean;
  isDescriptive?: boolean;
  clickFunc?: () => void;
};

export default function TodoCard({
  title,
  description,
  createdAt,
  completed,
  isDescriptive = false,
  clickFunc,
}: IProps) {
  return (
    <>
      <div
        className={`flex items-center justify-between cursor-pointer ${
          isDescriptive ? "p-8" : "p-4"
        } bg-white rounded-[8px] hover:shadow-md transition-all duration-200 border border-gray-200 text-justify`}
        onClick={isDescriptive ? () => {} : clickFunc}
      >
        {/* Left Section: Checkbox and Content */}
        <div className="flex items-start gap-4">
          {/* Checkbox */}
          {!isDescriptive && (
            <div
              className={`w-5 h-5 mt-2 flex items-center justify-center cursor-pointer border-2 rounded-md transition-all ${
                completed
                  ? "bg-blue-500 border-blue-500"
                  : "bg-white border-gray-300 hover:border-gray-500"
              }`}
              onClick={() => {}}
            >
              {completed && (
                <Check className="w-5 h-5 text-white" strokeWidth={4} />
              )}
            </div>
          )}
          {/* Todo Details */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800">
              {title || "Untitled Task"}
            </h3>
            <p className="text-sm text-gray-600 mt-1 max-w-lg">
              {description || "No description provided."}
            </p>
          </div>
        </div>

        {/* Right Section: Date */}
        {!isDescriptive && (
          <div className="text-xs text-gray-500 self-center whitespace-nowrap">
            {new Date(createdAt).toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </div>
        )}
      </div>
    </>
  );
}
