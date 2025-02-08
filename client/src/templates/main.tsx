import { Outlet } from "react-router-dom";
import { Navbar } from "../molecules";

export const MainTemplate = () => {
  //   const navigate = useNavigate();
  //   const isAuthenticated = useAppSelector(
  //     (state: RootState) => state.authentication.isAuthenticated
  //   );

  //   const checkForAuthentication = () => {
  //     if (!isAuthenticated) navigate(LOGIN);
  //   };

  //   useEffect(() => {
  //     checkForAuthentication();
  //   }, []);

  //   if (!isAuthenticated) return null;
  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <div className="w-[10%] h-full bg-slate-100 fixed top-0 left-0"></div>

      {/* Main Content */}
      <div className="ml-[10%] flex flex-col w-full">
        {/* Navbar */}
        <Navbar />

        {/* Content Area */}
        {/* <div className="flex flex-grow overflow-hidden"> */}
        {/* <div className="w-[50%] overflow-y-auto">todo list</div>
          <div className="w-[40%] border-l-[1px] overflow-y-auto">todo</div> */}
        <Outlet />
        {/* </div> */}
      </div>
    </div>
  );
};
