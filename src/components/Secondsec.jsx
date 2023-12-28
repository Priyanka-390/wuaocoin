import secimg from "../assets/images/sec-img.png";
import ellipse from "../assets/images/projectelipse.png"

const Secondsec = () => {
  return (
    <div className="relative">
      <div className="container max-w-[1140px]  mx-auto px-3 overflow-x-clip ">
        <div className="flex lg:flex-row flex-wrap -mx-3 items-start flex-col-reverse">
          <div className="lg:w-1/2  w-full px-3 items-center lg:-translate-y-24 flex max-lg:justify-center">
            <img src={secimg} alt="sec" className=" animate-spin-speed w-full" />
          </div>
          <div className="lg:w-1/2 w-full flex lg:px-9 px-3 max-lg:justify-center lg:pb-0 md:pt-9 pt-7 md:pb-5 pb-4 lg:items-start items-center lg:pt-10 flex-col">
            <h2 className="text-[#32352C] lg:text-start text-center lg:text-[50px] lg:pt-0 pt-3 sm:text-4xl text-4xl font-montserrat font-bold">
              Our Project
            </h2>
            <p className="font-montserrat lg:max-w-[447px] sm:max-w-[600px] lg:text-start text-center lg:pt-4 pt-1 md:text-lg text-sm font-normal opacity-70">
              Wuaocoin is the first project in the TechFi category that allows
              users multiple options to have utility and usability in the
              ecosystem, its time to change the way of seeing the purchases and
              sales of products and services within an multilateral electronic
              commerce platform using crypto technology.
            </p>
          </div>
        </div>
      </div>
      <img src={ellipse} alt="ellipse" className="absolute right-0 top-[-20%]"/>
    </div>
  );
};

export default Secondsec;
