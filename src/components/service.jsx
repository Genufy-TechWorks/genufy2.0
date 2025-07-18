import topo from "../assets/img/topo-left.svg";
import topoRight from "../assets/img/topo-right.svg";
import bgline from "../assets/img/common-underline.svg";
import sicon from "../assets/img/service_icon.svg";
import salesforceImg from "../assets/img/Salesforce.png";
import mobileappImg from "../assets/img/mobile_app.webp";
import webdevelopImg from "../assets/img/web_development.png";
import informaticaImg from "../assets/img/informatica.png";
import { Link } from "react-router-dom";

export default function ServicesPage() {
  const serviceCards = [
    {
      title: "salesforce",
      subtitle:
        "We specialize in delivering scalable, future-ready CRM solutions powered by the Salesforce ecosystem. With deep platform expertise, we help enterprises streamline operations, automate workflows, and elevate customer experiences.",
      description:
        "From multi-cloud implementations to intelligent automation and API integrations, we offer end-to-end Salesforce services using Sales Cloud, Service Cloud, Experience Cloud, Pardot, and MuleSoft.",
      route: "salesforce",
      img: salesforceImg,
    },
    {
      title: "informatica",
      subtitle:
        "We deliver enterprise-grade data integration and cloud modernization using Informatica Intelligent Cloud Services (IICS). Our solutions enable seamless, secure, and governed data flows across hybrid environments.",
      description:
        "From building real-time ETL pipelines to automating metadata management, we empower businesses with intelligent data movement, quality assurance, and compliance-ready architecture.",
      route: "informatica",
      img: informaticaImg,
    },
    {
      title: "web development",
      subtitle:
        "We engineer modern web applications using scalable, secure, and high-performance technologies. Our full-stack solutions are tailored to business needs whether it's building dynamic portals, SaaS products, or eCommerce platforms.",
      description:
        "Our development practices prioritize responsive UI, modular backends, API-first architecture, and SEO-friendly, conversion-optimized design.",
      route: "webdevelopment",
      img: webdevelopImg,
    },
    {
      title: "mobile app development",
      subtitle:
        "We build high-performance mobile apps that combine intuitive UX with cutting-edge tech. Our cross-platform development approach using Flutter and React Native ensures speed, scalability, and native-like performance.",
      description:
        "From idea to launch, we deliver apps that are secure, responsive, and ready for real-world usage across Android and iOS.",
      route: "mobileappdevelopment",
      img: mobileappImg,
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
          <div className="px-4 lg:pl-29 lg:pr-15 mt-15 lg:mt-33 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-25 gap-9">
            {serviceCards.map((card, index) => (
              <div
                key={index}
                className="flex flex-col items-center border border-white shadow-[0_0_10px_rgba(0,0,0,0.25)] text-justify rounded-[10px] p-10"
              >
                <div className="flex flex-col items-center mb-4">
                  <img
                    src={card.img}
                    alt={`${card.title} service`}
                    className="h-25 lg:mb-10 mb-3"
                  />
                  <h3 className="text-xl text-center capitalize font-semibold lg:leading-[50px] lg:mb-5">
                    {card.title}
                  </h3>
                </div>
                <p className="text-lg font-medium lg:mb-4 leading-[26px]">
                  {card.subtitle}
                </p>
                <p className="text-lg grow font-medium lg:mb-6 mb-5 leading-[26px]">
                  {card.description}
                </p>
                <Link
                  to={`/services/${card.route}`}
                  className={`hover:underline text-base lg:text-xl leading-[50px] font-bold flex items-center`}
                >
                  View more
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
