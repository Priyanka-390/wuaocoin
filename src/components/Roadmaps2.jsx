import roadimg from "../assets/images/roadmap-img.png";
import roadmapellipse from "../assets/images/roadmap-ellipse.png";
import roadmaparrow from "../assets/images/roadmap-arrow.svg";
import roadmapellipse2 from "../assets/images/roadmapellipse2.png"

const boxdata = [
  {
    bg: "bg-[#EFB93B]",
    num: "01",
    dis: "Organizational concept (creations)",
    id:1,
  },
  {
    bg: "bg-[#E0480A]",
    num: "02",
    dis: "Directional Process (Actions)",
    id:2,
  },
  {
    bg: "bg-[#4D86DC]",
    num: "03",
    dis: "Operational Development (technical team)",
    id:3,
  },
  {
    bg: "bg-[#364EC6]",
    num: "04",
    dis: "Strategic Opportunities (alliances)",
    id:4,
  },
  {
    bg: "bg-[#6A3DAD]",
    num: "05",
    dis: "Stakeholders (benefits)",
    id:5
  },
  {
    bg: "bg-[#ED5C83]",
    num: "06",
    dis: "Human Identity (social contribution)",
    id:6
  },
];

const Roadmaps2 = () => {
  const box = boxdata.map((boxdata) => (
    <div key={boxdata.id} className=" md:w-1/3 w-1/2  xl:w-1/6 mb-4 xl:mb-0 px-3 flex justify-center">
      <div
        className={`max-w-[206.87px] ${boxdata.bg} rounded-[14.91px] pt-2 pl-3 pb-11`}>
        <p className="text-white opacity-50 font-montserrat font-bold lg:text-[27.96px] text-xl leading-[34.08px] mb-5">
          {boxdata.num}
        </p>
        <h4 className="lg:text-xl text-base text-white font-montserrat leading-[24.38px] font-bold">
          {boxdata.dis}
        </h4>
      </div>
    </div>
  ));
  return (
    <div className="relative z-20" id="ico">
      <div className="flex justify-center lg:pb-32 md:pb-24 pb-10 items-center flex-col lg:pt-24 md:pt-16 sm:pt-14 pt-4">
        <h2 className="font-bold font-montserrat lg:text-[50px] md:text-5xl text-4xl text-[#32352C]">
          RoadMap
        </h2>
        <p className="font-montserrat text-black text-center opacity-70 md:text-lg text-base px-3 font-normal pt-4 max-w-[672px]">
          Knowing our values, understanding the business idea and then,
          gradually, presenting the plans to the public is our way of doing
          things.
        </p>
        <img src={roadimg} alt="roadimg" className="lg:pt-[75px] md:pt-16 sm:py-12 py-8 lg:pb-14" />
        <div className="flex flex-row flex-wrap">{box}</div>
      </div>
      <img src={roadmapellipse} alt="roadmapellipse" className="absolute top-0 left-0" />
      <img src={roadmaparrow} alt="roadmaparrow" className="absolute sm:block hidden  right-[5%] top-[5%]" />
      <img src={roadmapellipse2} alt="roadmapellipse2" className="absolute right-0 bottom-[-8%] -z-10" />
    </div>
  );
};

export default Roadmaps2;
