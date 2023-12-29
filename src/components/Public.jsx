import React, { useEffect, useState } from "react";

const Public = () => {
  const [time, setTime] = useState({});
  function dateDifference(date1, date2) {
    const difference = {};
    let tmp = date2 - date1;
    difference.days = Math.floor(tmp / 86400000);
    tmp -= difference.days * 86400000;
    difference.hours = Math.floor(tmp / 3600000);
    tmp -= difference.hours * 3600000;
    difference.minutes = Math.floor(tmp / 60000);
    tmp -= difference.minutes * 60000;
    difference.seconds = Math.floor(tmp / 1000);
    return difference;
  }

  useEffect(() => {
    setInterval(() => {
      let timeTaken = dateDifference(
        new Date(Date.now()),
        new Date(`2024-03-22T02:00:00.000Z`)
      );
      setTime(timeTaken);
    }, 0);
  }, []);
    
  return (
    <div>
      <div className="container max-w-[1140px] md:pb-20 sm:pb-14 pb-10 mx-auto px-3">
        <div className="flex justify-center items-center flex-col">
          <h2 className="max-w-[609px] text-white font-montserrat text-center lg:text-3xl sm:text-2xl text-2xl leading-[174%] font-bold md:pt-20 pt-10">
            Public Sale 5% in ERC20 & BEP20, 100% for the Community
          </h2>
          <div className="flex items-center justify-center sm:gap-[14px] gap-2 lg:mt-[58px] md:mt-10 sm:mt-8 mt-4">
            <div>
              <div className=" border-white rounded-[10px] border-[1px] sm:pt-[10px] sm:pe-[21px] px-2 py-2 sm:pb-[9px] sm:ps-[20px] md:w-[106px] max-sm:w-[53px] max-md:w-[105px]">
                <p className="text-white font-montserrat sm:text-[50px] text-[18px] font-bold sm:leading-[87px] leading-[30px] text-center ">
                  {time && time.days}
                </p>
              </div>
              <p className="text-center text-white font-montserrat sm:text-lg text-[14px] font-medium leading-[31px] pt-[5px]">
                Days
              </p>
            </div>
            <p className=" mb-[2.5rem] text-white font-montserrat sm:text-[50px] text-[18px] font-normal sm:leading-[87px] leading-[30px] text-center">
              :
            </p>
            <div>
              <div className=" border-white rounded-[10px] border-[1px] sm:pt-[10px] sm:pe-[21px] px-2 sm:ps-[20px] py-2 sm:pb-[9px] md:w-[106px] max-sm:w-[53px] max-md:w-[105px]">
                <p className="text-white font-montserrat sm:text-[50px] text-[18px] font-bold sm:leading-[87px] leading-[30px] text-center ">
                  {time && time.hours}
                </p>
              </div>
              <p className="text-center text-white font-montserrat sm:text-lg text-[14px] font-medium leading-[31px] pt-[5px]">
                hours
              </p>
            </div>
            <p className=" mb-[2.5rem] text-white font-montserrat sm:text-[50px] text-[18px] font-normal sm:leading-[87px] leading-[30px] text-center">
              :
            </p>
            <div>
              <div className=" border-white rounded-[10px] border-[1px] sm:pt-[10px] sm:pe-[21px] px-2 sm:ps-[20px] py-2 sm:pb-[9px] md:w-[106px] max-sm:w-[53px] max-md:w-[105px]">
                <p className="text-white font-montserrat sm:text-[50px] text-[18px] font-bold sm:leading-[87px] leading-[30px] text-center ">
                  {time && time.minutes}
                </p>
              </div>
              <p className="text-center text-white font-montserrat sm:text-lg text-[14px] font-medium leading-[31px] pt-[5px]">
                Minute
              </p>
            </div>
            <p className=" mb-[2.5rem] text-white font-montserrat sm:text-[50px] text-[18px] font-normal sm:leading-[87px] leading-[30px] text-center">
              :
            </p>
            <div>
              <div className=" border-white rounded-[10px] border-[1px] sm:pt-[10px] sm:pe-[21px] px-2 sm:ps-[20px] py-2 sm:pb-[9px] md:w-[106px] max-sm:w-[53px] max-md:w-[105px]">
                <p className="text-white font-montserrat sm:text-[50px] text-[18px] font-bold sm:leading-[87px] leading-[30px] text-center ">
                  {time && time.seconds}
                </p>
              </div>
              <p className="text-center text-white font-montserrat sm:text-lg text-[14px] font-medium leading-[31px] pt-[5px]">
                Second
              </p>
            </div>
          </div>
          <button className="px-5 py-3 lg:mt-12 md:mt-8 sm:mt-6 mt-4 rounded-[40px] bg-white group hover:bg-transparent duration-300 border border-white">
            {" "}
            <span className="font-semibold text-base bg-textgradient bg-clip-text text-transparent font-montserrat group-hover:text-white">
              BUY WUAO
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Public;
