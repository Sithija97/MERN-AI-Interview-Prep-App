import { useNavigate } from "react-router-dom";
import { ADD } from "../routes";

export const Header = () => {
  const navigate = useNavigate();
  const redirectToAdd = () => navigate(ADD);
  return (
    <div className="flex items-center justify-between px-6 py-2 border-b-[1px]">
      My Todos...
      <button
        className="bg-black text-white font-medium border px-4 py-1 rounded-lg"
        onClick={redirectToAdd}
      >
        Add New
      </button>
    </div>
  );
};
