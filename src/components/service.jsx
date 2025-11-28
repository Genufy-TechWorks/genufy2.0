import topo from "../assets/img/topo-left.svg";
import topoRight from "../assets/img/topo-right.svg";
import bgline from "../assets/img/common-underline.svg";
import sicon from "../assets/img/service_icon.svg";
import salesforceImg from "../assets/img/salesforce.png";
import mobileappImg from "../assets/img/mobile_app.webp";
import webdevelopImg from "../assets/img/web_development.png";
import informaticaImg from "../assets/img/informatica.png";
import snowflakeImg from "../assets/img/snowflakeimg.svg";
import aiImg from "../assets/img/aiimg.jpg";
import pegaImg from "../assets/img/pegaimg3.png";
import { Link } from "react-router-dom";

export default function ServicesPage() {
  const serviceCards = [
    {
      title: "AI Solutions",
      subtitle:
        "We build intelligent AI solutions using analytics, automation, NLP, vision technologies. These tools help businesses improve decisions, streamline operations, enhance experiences...",
      route: "aisolutions",
      img: aiImg,
    },
    {
      title: "Salesforce",
      subtitle:
        "We deliver Salesforce CRM solutions streamlining operations and enhancing experiences. We offer multi-cloud setups, automation, and integrations across Salesforce clouds...",
      route: "salesforce",
      img: salesforceImg,
    },
    {
      title: "Informatica",
      subtitle:
        "We deliver enterprise-grade data integration and cloud modernization using IICS securely. We build real-time pipelines and automate metadata ensuring quality, compliance...",
      route: "informatica",
      img: informaticaImg,
    },
    {
      title: "Snowflake",
      subtitle:
        "We help you leverage Snowflake's Data Cloud to unite your siloed data, discover and securely share data, and execute diverse analytic workloads...",
      route: "snowflake",
      img: snowflakeImg,
    },
    {
      title: "Web development",
      subtitle:
        "We engineer modern web applications using scalable secure high-performance technologies. Our solutions include portals, SaaS, eCommerce platforms with responsive design...",
      route: "webdevelopment",
      img: webdevelopImg,
    },
    {
      title: "Mobile app development",
      subtitle:
        "We build high-performance mobile apps using intuitive UX and cross-platform technology. We deliver secure apps from idea to launch supporting Android iOS...",
      route: "mobileappdevelopment",
      img: mobileappImg,
    },
    {
      title: "Pega",
      subtitle:
        "We deliver Pega automation and CRM solutions that improve workflows. Our Pega platforms streamline operations, automate workflows, driving scalable growth...",
      route: "pega",
      img: pegaImg,
    },
  ];

  const keyFeatures = [
    "Tech for Every Corner – Urban & Rural",
    "Modular, Agile Architecture",
    "People-First Product Design",
    "Certified Talent, Committed Team",
    "Sustainable Digital Impact",
    "Always-On Support",
    "Internship-Integrated Innovation",
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="relative z-10">
        {/* Header Section */}
        <div className="text-center  lg:pt-30 pt-11 pb-11 lg:pb-45 px-4">
          <h1
            className="lg:text-[40px] text-3xl font-bold leading-[50px] mb-2 lg:mb-12"
            style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            Services
          </h1>
          <div className="lg:text-xl lg:w-[65%] m-auto text-sm leading-[26px] lg:leading-[50px] text-center font-medium">
            At Genufy, we don't just build digital solutions we architect
            growth. As a next-generation digital transformation company, we
            enable organizations of all sizes to unlock value, drive efficiency,
            and scale seamlessly in a hyper-connected world. Our expertise spans
            across cutting-edge technologies and platforms, delivering solutions
            that are innovative, scalable, and impact-driven.
          </div>
          <img
            src={topo}
            alt="bg-img"
            className="floating hidden lg:block absolute left-0 bottom-0 top-50 w-[250px]"
          />
          <img
            src={topoRight}
            alt="bg-img"
            className="floating hidden lg:block absolute right-0 bottom-0 top-100 w-[250px]"
          />
        </div>

        {/* Service Offerings Section */}
        <div className="px-4 lg:pl-12 lg:pr-15 lg:pb-15 pb-3">
          <div className="flex flex-col lg:flex-row items-start md:items-center justify-between">
            <div className="space-y-4 lg:w-[75%]">
              <div className="flex items-center">
                <img
                  src={sicon}
                  alt="service-icon"
                  className="lg:w-[84px] ml-5 lg:ml-0 lg:mr-7 mr-7 w-8"
                />
                <h2 className="text-3xl lg:text-5xl font-bold inline-block pb-1">
                  Our Service Offerings
                  <img
                    src={bgline}
                    alt="border-line"
                    className="w-15 lg:w-auto mt-2"
                  />
                </h2>
              </div>
              <div className="lg:ml-29 text-sm leading-[26px] mt-6 lg:text-xl lg:leading-[50px] text-center lg:text-left">
                <b>
                  Empowering your vision through intelligent digital
                  engineering.
                </b>
                <br />
                At Genufy, we offer comprehensive and industry-leading services
                that turn ideas into scalable solutions. Whether you’re
                optimizing operations, improving customer engagement, or
                building new digital capabilities we’re here to accelerate your
                transformation journey.
              </div>
            </div>
          </div>

          {/* Service Cards Grid */}
          <div
            className="relative px-4 lg:px-24 mt-16 lg:mt-24
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15 "
          >
            {serviceCards.map((card, index) => (
              <div
                key={index}
                className=" group flex flex-col bg-white border border-gray-100 rounded-2xl
                 shadow-[0_2px_10px_rgba(0,0,0,0.05)] 
                 hover:shadow-[0_2px_10px_rgba(0,0,0,0.12)] 
                 overflow-hidden transition-all duration-300
                 hover:-translate-y-2 "
              >
                {/* Top Image */}
                <img
                  src={card.img}
                  alt={`${card.title} service`}
                  className="w-50 h-45 p-5 object-contain self-center"
                />

                {/* Content */}
                <div className="px-8 pb-6 flex flex-col gap-4">
                  <h3 className="text-xl font-semibold text-gray-900 ">
                    {card.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-gray-600">
                    {card.subtitle}
                  </p>
                </div>

                {/* Bottom Button */}
                <Link
                  to={`/services/${card.route}`}
                  className="mt-auto w-full text-center font-semibold tracking-wide uppercase text-sm
             py-4 bg-white
             bg-gradient-to-r from-[#30BFA4] to-[#85E668] bg-clip-text text-transparent
             transition-all duration-300
             group-hover:bg-gradient-to-r group-hover:from-[#30BFA4] group-hover:to-[#85E668]
  group-hover:text-white group-hover:bg-clip-border"
                >
                  Learn Now
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features Section */}
        <div className="lg:pl-40 lg:pr-15 lg:pt-15 lg:pb-25 p-8">
          <h2 className="text-3xl lg:text-5xl leading-[50px] font-bold lg:mb-11 mb-4">
            Key Features That Set Us Apart
          </h2>
          <div className="space-y-4">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="flex items-start mb-2">
                <p className="ml-2 text-base lg:text-xl leading-[26px] lg:leading-[50px]">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


