const HeroCard = () => {
  return (
    <div className="flex flex-col mr-4 justify-between align-middle">
      <div className="w-full h-[20rem] sm:h-full sm:bg-hero-img bg-mobile-hero-img bg-contain bg-no-repeat">
        {/* <img src="/images/image-web-3-desktop.jpg" alt="image-web-3-desktop" /> */}
      </div>
      <div className="flex flex-col sm:flex-row align-middle justify-evenly">
        <h1 className="text-5xl sm:text-6xl my-5 sm:my-0 font-black tracking-wider text-left basis-1/2">
          The Bright Future of Web 3.0?
        </h1>
        <div className="flex flex-col font-inter basis-1/2 justify-between">
          <p className="text-[15px] font-normal text-dark-grayish-blue text-left mb-8 tracking-wide text-wrap basis-4/5">
            We dive into the next evolution of the web that claims to put the power of the platforms
            back into the hands of the people. But is it really fulfilling its promise?
          </p>
          <div className="uppercase text-base font-medium text-off-white bg-soft-red hover:bg-very-dark-blue w-52  max-w-52 py-3 font-inter tracking-wider basis-1/5">
            read more
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
