const Header = () => {
  const headerImg = "https://i.ibb.co/9qmKGcL/R-3.jpg";
  return (
    <div
      className="h-[600px] bg-cover bg-center "
      style={{
        backgroundImage: `linear-gradient(to right,rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)),url(${headerImg})`,
      }}
    >
      <div className="w-full h-full grid md:flex flex-col content-center md:justify-center items-left text-slate-200 px-2 container">
        <div className="w-full md:w-[520px] font-bold">
          <h1 className="text-3xl py-2">
            MIEBELY Remote Control Car, Bugatti Divo 1/16 Scale Rc Cars 12Km/h
          </h1>
          <h2 className="text-2xl ">Brand: MIEBELY</h2>
          <h2 className="text-2xl py-2">Material: ABS Plastic</h2>
          <p>
            Easy to Control: We designed this Bugatti remote control car having
            in mind nothing but the desire to help get a glimpse of the real
            driving experience with this supercar. Unlike other similar rc cars,
            our toy car allows you to control the speed and the proportional
            throttle by pulling the trigger, exactly like the original car.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
