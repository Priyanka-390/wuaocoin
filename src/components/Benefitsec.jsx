import img1 from "../assets/images/third-1.png";
import img2 from "../assets/images/third-2.png";
import img3 from "../assets/images/third-3.png";
import benearrow from "../assets/images/benefitarrow.png"

const Benefitsec = () => {
  return (
    <div className="relative">
      <div className="container max-w-[1140px] mx-auto px-3 lg:pb-40 md:pb-24 pb-10">
        <div className="flex justify-center items-center md:pt-0 pt-6 ">
          <h2 className="text-[#32352C] font-montserrat text-[50px] font-bold">
            Benefits
          </h2>
        </div>
        <div className="flex flex-row flex-wrap -mx-3 pt-8">
          <div className="lg:w-1/3 sm:w-1/2 w-full  px-3 flex justify-center flex-col items-center mb-5 md:mb-0">
            <div className="bg-[#FBF3E6] overflow-hidden p-5 animate-wiggle-view "><img src={img1} alt="img3" /></div>
            <p className="lg:text-lg text-[14px] pt-2 font-montserrat text-center lg:opacity-70 text-black max-w-[317px] mx-auto ">
              Services, Products and Community All in one place!
            </p>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 w-full px-3 flex justify-center flex-col items-center mb-5 md:mb-0">
            <div className="bg-[#FBF3E6] overflow-hidden animate-wiggle-view "><img src={img2} alt="img3" /></div>
            <p className="lg:text-lg text-[14px] pt-2 font-montserrat text-center lg:opacity-70 text-black max-w-[272px] mx-auto">
              Selling in crypto will no longer be complicated, it will be safe
                          and reliable.
            </p>
          </div>
          <div className="lg:w-1/3 w-full px-3 flex justify-center flex-col items-center mb-5 md:mb-0">
                      <div className="bg-[#FBF3E6] overflow-hidden animate-wiggle-view "><img src={img3} alt="img3" /></div>
                      <p className="lg:text-lg text-[14px] font-montserrat text-center lg:opacity-70 text-black max-w-[288px] pt-2 mx-auto">Buying and getting a real discount is possible? Join and check it out.</p>
          </div>
        </div>
      </div>
      <img src={benearrow} alt="benearrow" className="absolute bottom-[12%] left-[4%]" />
    </div>
  );
};

export default Benefitsec;
