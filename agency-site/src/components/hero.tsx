export const Hero = () => {
  return (
    <div className="py-[84px] px-[121px]">
      <div className="grid grid-cols-2">
        <div className="flex items-center justify-start gap-16">
          <div className="flex flex-col gap-[44px] w-full h-fit">
            <div className="flex flex-col gap-[28px]">
              <h1 className="font-bold text-[96px] leading-[98.5px]">
                We Take <br /> Care Of <br />
                Your Brand
              </h1>
              <p>We care about our work and we care about our clients.</p>
            </div>
            {/* <div className="flex mr-5 bg-pink-400">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="w-full mr-3"
              />
              <button className="">Let's Talk</button>
            </div> */}
          </div>
          <div></div>
        </div>
        <div>
          <img src="hero.svg" alt="hero-img" />
        </div>
      </div>
    </div>
  );
};
