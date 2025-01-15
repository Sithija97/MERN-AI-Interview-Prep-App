export const Navbar = () => {
  return (
    <div className="py-[18px] px-[120px] border-b border-black/20">
      <div className="w-full flex items-center justify-between">
        <div className="">
          <img src="./logo.svg" alt="logo" />
        </div>
        <div className="flex items-center cursor-pointer gap-10">
          <p>How it Works</p>
          <p>Our Work</p>
          <p>Pricing</p>
          <p>About Us</p>
        </div>
        <div>
          <button
            type="button"
            className="border-none cursor-pointer rounded-[70px] py-4 px-6 text-primary-white bg-primary-blue"
          >
            Book A Call
          </button>
        </div>
      </div>
    </div>
  );
};
