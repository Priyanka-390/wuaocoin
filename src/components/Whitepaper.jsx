import whiteimg1 from "../assets/images/whiteimg1.png";
import whiteimg2 from "../assets/images/whiteimg2.png";
import whitearro from "../assets/images/whitearrow.svg"

const Whitepaper = () => {
  return (
    <div>
      <div className="flex md:flex-row flex-wrap lg:py-20 md:py-16 py-12 relative" id="white">
        <div className="md:w-1/3 w-full px-3 flex justify-center">
          <img src={whiteimg1} alt="" />
        </div>
        <div className="md:w-1/3 w-full px-3 pt-7">
          <div className="flex justify-center flex-col items-center">
              <h2 className="text-white text-center font-montserrat lg:text-[50px] text-4xl font-bold">
                Whitepaper
              </h2>
              <p className="text-white max-w-[577px] text-center font-montserrat md:text-lg text-base font-semibold sm:pt-3 pt-2">
                We want you to know our vision we leave you our whitepaper and now
                be a part of the digital transformation.
                      </p>
                      <button className="bg-white px-5 py-3 lg:mt-14 md:mt-8 mt-4 rounded-[40px] group hover:bg-transparent border border-white duration-300"><span className="bg-textgradient font-semibold text-base text-transparent bg-clip-text group-hover:text-white">Read WhitePaper</span></button>
          </div>
              </div>
              <div className="md:w-1/3 w-full px-3 flex justify-center">
                  <img src={whiteimg2} alt="" />
              </div>
              <img src={whitearro} alt="white" className="absolute sm:block hidden  bottom-[28%] left-[33%]"/>
      </div>
    </div>
  );
};

export default Whitepaper;
