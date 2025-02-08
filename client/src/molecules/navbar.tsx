import { Link } from "react-router-dom";
import { ROOT } from "../routes";

export const Navbar = () => {
  return (
    <div className="h-[52px] bg-white border-b-[1px]">
      <div className="h-full flex items-center">
        <Link to={ROOT}>
          <img
            src="https://www.pipelinersales.com/wp-content/uploads/2023/03/app-marketplace-logo-badge-microsoft-tasks-1507.png"
            alt="logo"
            className="h-6"
          />
        </Link>
        <p className="font-medium">To Do</p>
      </div>
    </div>
  );
};
