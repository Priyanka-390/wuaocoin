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
        <div className="flex flex-row flex-wrap -mx-3">
          <div className="lg:w-1/3 md:w-1/2 w-full lg:pt-[52px] md:pt-10 pt-6 px-3 flex flex-col justify-center">
            <img src={img1} alt="img1" />
            <div className="flex justify-center items-center">
              <p className="max-w-[330px] text-center pt-3 text-black opacity-70 font-montserrat sm:text-lg text-base font-normal ">
                Services, Products and Community All in one place!
              </p>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full lg:pt-[52px] md:pt-10 pt-6 px-3 flex flex-col justify-center">
            <img src={img2} alt="img3" />
            <div className="flex justify-center items-center">
              <p className="max-w-[272px] text-center pt-3 text-black opacity-70 font-montserrat sm:text-lg text-base font-normal ">
                Selling in crypto will no longer be complicated, it will be safe
                and reliable.
              </p>
            </div>
          </div>
          <div className="lg:w-1/3 w-full lg:pt-[52px] md:pt-10 pt-6 px-3 flex flex-col justify-center">
            <div className="flex justify-center flex-col items-center">
              <img src={img3} alt="img3" className="md:w-[50%] w-full lg:w-full" />
              <div className="flex justify-center items-center">
                <p className="max-w-[288px] text-center pt-3 text-black opacity-70 font-montserrat sm:text-lg text-base font-normal ">
                  Buying and getting a real discount is possible? Join and check
                  it out.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={benearrow} alt="benearrow" className="absolute bottom-[12%] left-[4%]" />
    </div>
  );
};

export default Benefitsec;
