import imgage from "../assets/images/herogroup-img.png";
import arrow1 from "../assets/images/arrow-1.png";
import arrow2 from "../assets/images/arrow-2.png";
import arrow3 from "../assets/images/arr.png";
import arrow4 from "../assets/images/arrow-4.png";

const Headersec = () => {
  return (
    <div className="relative max-lg:bg-[#FFB23C]">
      <div className="xl:pt-64 xl:pb-96 lg:py-44 md:py-40 py-8 relative">
        <div className="container max-w-[1140px] mx-auto px-3">
          <div className="flex flex-row flex-wrap -mx-3 items-center">
            <div className="lg:w-1/2 w-full px-3">
              <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start">
                <p className="text-white lg:text-start text-center font-montserrat font-semibold md:text-xl text-lg">
                  Welcome to
                </p>
                <h1 className="max-w-[513px] lg:text-start text-center text-white font-montserrat lg:text-[65px] md:text-[60px] text-4xl  md:font-bold font-semibold leading-[112%]">
                  The Future of E-Commerce
                </h1>
                <p className="max-w-[384px] lg:text-start text-center text-lg font-montserrat font-medium text-white">
                  A multi-purpose token to improve digital sales and purchases
                </p>
                <div className="lg:pt-10 md:pt-6 pt-4 flex lg:text-start text-center justify-center">
                  <button className="md:px-5 px-4 md:py-3 py-2 rounded-[40px]  bg-white group hover:bg-transparent border border-white duration-300">
                    <span className="md:text-base text-sm font-semibold font-montserrat bg-textgradient bg-clip-text text-transparent group-hover:text-white">
                      How To Buy
                    </span>
                  </button>
                  <button className="rounded-[40px] md:px-5 ml-4 md:py-3 px-4 py-2 border hover border-solid border-white bg-white hover:bg-transparent group duration-300">
                    <span className="bg-clip-text bg-textgradient text-transparent group-hover:text-white font-montserrat md:text-base text-sm font-semibold ">
                      Read Whitepaper
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full px-3 flex justify-end lg:pt-0 pt-8">
              <img
                src={imgage}
                alt="image"
                className="w-full xl:translate-x-28"
              />
            </div>
          </div>
        </div>
        <img
          src={arrow1}
          alt="arrow"
          className="absolute top-[10%] right-[53%]"
        />
        <img
          src={arrow2}
          alt="arrow2"
          className="absolute sm:block hidden right-[53%] bottom-[20%]"
        />
        <img
          src={arrow3}
          alt="arrow3"
          className="absolute sm:block hidden bottom-[30%] left-[4%]"
        />
      </div>
      <img
        src={arrow4}
        alt="arrow4"
        className="absolute sm:block hidden right-[4%] bottom-[5%]"
      />
    </div>
  );
};

export default Headersec;
