import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

const App = () => {
  return (
    // <div className="h-screen flex">
    //   {/* Sidebar */}
    //   <div className="w-[10%] h-full bg-slate-100 fixed top-0 left-0">
    //     sidebar
    //   </div>

    //   {/* Main Content */}
    //   <div className="ml-[10%] flex flex-col w-full">
    //     {/* Navbar */}
    //     <div className="h-[52px] bg-white border-b-[1px]">nav</div>

    //     {/* Content Area */}
    //     <div className="flex flex-grow overflow-hidden">
    //       <div className="w-[50%] overflow-y-auto">todo list</div>
    //       <div className="w-[40%] border-l-[1px] overflow-y-auto">todo</div>
    //     </div>
    //   </div>
    // </div>
    <section
      className={`${
        import.meta.env.VITE_DEV_ENV === "development" ? "debug-screens" : ""
      }`}
    >
      <RouterProvider router={router} />
    </section>
  );
};

export default App;
