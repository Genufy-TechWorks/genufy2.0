import { useState } from "react";
import ourvaluesbg from "../assets/img/ourvalues1.gif";
import Values from "./values";
import WhyRural from "./WhyRural";

const CompanyValues = () => {
  const hero = {
    values: {
      name: "value",
      title: "Our Values",
      description:
        "Our Salesforce Professional Services, we apply a holistic, strategic, and tailored approach to each Salesforce engagement. We combine deep platform expertise with extensive industry-specific experience, to help you leverage Salesforce  to achieve your business objectives effectively and cost-efficiently.",
    },
    rural: {
      name: "rural",
      title: "Why at Rural",
      description:
        "At Genufy TechWorks, we made a conscious decision to establish our company in a rural area of Tamil Nadu. This was not just a business choice but a mission-driven initiative to bridge the urban-rural divide in the technology industry. We believe that innovation is not confined to metro cities; talent exists everywhere it simply needs the right opportunities to flourish.",
    },
  };
  const [herovalue, setHerovalue] = useState(hero.values);

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative text-white bg-cover"
        style={{ backgroundImage: `url(${ourvaluesbg})` }}
      >
        {/* <div className="absolute inset-0 bg-black opacity-20"></div> */}
        <div className="relative lg:pt-30 lg:pb-25 lg:py-0 lg:px-0 px-5 py-10 lg:w-[70%] mx-auto text-center">
          <h1 className="text-3xl leading-[37px] lg:text-4xl lg:text-[40px] lg:leading-[50px] font-bold lg:mb-8 mb-5">
            {herovalue.title}
          </h1>
          <p className="lg:mt-11 lg:text-sm lg:text-xl lg:leading-[50px] text-sm leading-[26px] font-medium">
            {herovalue.description}
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="bg-white py-2 px-5 rounded-t-[30px] absolute flex gap-4 lg:gap-0">
            <button
              className={`font-bold rounded-full p-2 px-4 lg:py-2 lg:px-40 text-black ${
                herovalue.name == "value"
                  ? "bg-[linear-gradient(90deg,_#90eb61_0%,_#24baac_100%)]"
                  : "border-1"
              }`}
              onClick={() => setHerovalue(hero.values)}
            >
              Our Values
            </button>
            <button
              className={`lg:ml-10 font-bold rounded-full p-2 px-4 lg:py-2 lg:px-40 text-black ${
                herovalue.name == "rural"
                  ? "bg-[linear-gradient(90deg,_#90eb61_0%,_#24baac_100%)]"
                  : "border-1"
              }`}
              onClick={() => setHerovalue(hero.rural)}
            >
              Why at rural
            </button>
          </div>
        </div>
      </div>
      {herovalue.name === "value" ? <Values /> : <WhyRural />}

      {/* Footer Section */}
      <div className="mt-5 mb-20">
        <div className="max-w-4xl mx-auto lg:px-8 px-4 text-center">
          <p className="text-[18px] leading-[26px] lg:text-lg lg:leading-[40px] font-semibold mb-8">
            By choosing to establish our roots in a rural area, we are proving
            that location is no longer a barrier to success. We invite aspiring
            entrepreneurs, professionals, and organizations to join us in this
            movement and create a future where talent thrives everywhere not
            just in big cities.
          </p>
          <div className="flex flex-col lg:flex-row items-center justify-center">
            <span className="font-bold text-[20px] leading-[26px] text-center bg-gradient-to-r from-[#36ECCD] via-[#6DF493] to-[#6DF493] bg-clip-text text-transparent">
              Genufy TechWorks
            </span>
            <span className="hidden lg:block px-2 font-bold"> - </span>
            <span className="font-bold text-[20px] leading-[26px] text-center">
              Building the Future, Beyond City Limits.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyValues;
