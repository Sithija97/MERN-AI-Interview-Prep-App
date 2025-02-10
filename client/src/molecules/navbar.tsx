import { Link, useNavigate } from "react-router-dom";
import { LOGIN, ROOT } from "../routes";
import { useAppDispatch } from "../store";
import { logoutUser } from "../store/auth.slice";

export const Navbar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logout = async () => {
    await dispatch(logoutUser());
    navigate(LOGIN);
  };
  return (
    <div className="h-[52px] bg-white border-b-[1px] flex items-center justify-between">
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
      <button onClick={logout} className="mr-6">
        Log out
      </button>
    </div>
  );
};
