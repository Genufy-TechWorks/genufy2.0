import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import salesforceImg from "../assets/img/Salesforceicon.png";
import mobileappImg from "../assets/img/Mobileicon.png";
import webdevelopImg from "../assets/img/webicon.png";
import informaticaImg from "../assets/img/informaticaicon.png";
import aiImg from "../assets/img/AIicon.png";
import pegaImg from "../assets/img/pegaicon.png"

import sfbg from "../assets/img/sfbackimg.png";
import informbg from "../assets/img/carouselbg.png";
import aibg from "../assets/img/carouselbg.png";
import webbg from "../assets/img/carouselbg.png";
import mobbg from "../assets/img/carouselbg.png";
import pegabg from "../assets/img/carouselbg.png";

const AnimatedSlideshow = () => {
  const slides = [
    {
      title: "AI Development",
      titleColor:
        "text-2xl font-bold bg-gradient-to-r from-[#30BFA4] to-[#85E668] bg-clip-text text-transparent",
      bg: aibg ,
      content: [
        "We are integrating Artificial Intelligence (AI) across our solutions to enhance efficiency, accuracy, and innovation.",
        "At Genufy Techworks, we’re committed to building intelligent systems that transform how businesses operate in the digital era.",
        "Our AI-driven models optimize business workflows and deliver real-time intelligence for smarter operations.",
        "We leverage machine learning and automation to transform data into powerful business insights",
      ],
      url: "/services/aidevelopment",
      logo: aiImg,
    },
    {
      title: "Salesforce",
      bg:sfbg,
      titleColor: "text-blue-400",
      content: [
        "Empower your customer experience with expert Salesforce services.",
        "We help businesses maximize ROI on Salesforce through scalable, integrated, and automated solutions.",
        "Custom development of Lightning Web Components (LWC) and Aura Components",
        "End-to-end CRM automation using Apex, Flows, and Process Builder",
        "Third-party API integration (REST/SOAP) for unified platforms",
        // "Data modeling and architecture tailored to business logic",
        "Performance tuning, security configurations, and user adoption strategies",
      ],
      url: "/services/salesforce",
      logo: salesforceImg,
    },
    {
      title: "Informatica",
      bg:informbg,
      titleColor: "text-orange-400",
      content: [
        "Cloud-first data integration and automation with Informatica IICS.",
        "We streamline data transfer and ETL operations with secure, efficient, and scalable workflows.",
        "Monitor and manage all ETL workflows for continuous data sync",
        "Automate data pipelines and trigger alerts on job failures",   
        "Secure Agent configuration for encrypted data transfers",
        // "Seamless integration across diverse data sources and targets",
        "SQL optimization and job re-triggering for flawless data delivery",
      ],
      url: "/services/informatica",
      logo: informaticaImg,
    },
    {
      title: "Web Development",
      bg:webbg,
      titleColor:
        "text-2xl font-bold bg-gradient-to-r from-[#30BFA4] to-[#85E668] bg-clip-text text-transparent",
      content: [
        "SEO-optimized, scalable websites and web apps built to convert.",
        "We specialize in creating high-performance web platforms that engage users and drive measurable results.",
        "Full-stack development with modern tech (React, Node, Angular, Vue, etc.)",
        "Custom CMS and eCommerce platforms for business flexibility",
        "Responsive web design for mobile, tablet, and desktop",
        "SEO fundamentals baked into every build for better rankings",
        // "Lightning-fast load times and top-tier security practices",
      ],
      url: "/services/webdevelopment",
      logo: webdevelopImg,
    },
    {
      title: "Mobile App Development",
      bg:mobbg,
      titleColor:
        "text-2xl font-bold bg-gradient-to-r from-[#30BFA4] to-[#85E668] bg-clip-text text-transparent",
      content: [
        "Build next-gen mobile apps for iOS, Android, and beyond.",
        "From concept to launch, we create mobile experiences that your users love and your business needs.",
        // "Cross-platform and native mobile app development",
        "UI/UX design tailored for mobile user behavior",
        "Real-time sync, offline mode, and third-party integrations",
        "Scalable architecture with secure backend APIs",
        "App Store and Play Store launch support with version control",
      ],
      url: "/services/mobileappdevelopment",
      logo: mobileappImg,
    },
    {
      title: "Pega",
      bg: pegabg,
      titleColor:
        "text-2xl font-bold bg-gradient-to-r from-[#30BFA4] to-[#85E668] bg-clip-text text-transparent",
      content: [
        "Empower your enterprise with intelligent automation and AI-driven decisioning through Pega.",
        "Automate, optimize, and innovate faster with Pega’s low-code intelligent automation platform.",
        // "Cross-platform and native mobile app development",
        "Transform business processes with Pega’s AI-powered automation and seamless workflow orchestration.",
        "Drive smarter decisions and effortless automation with the power of Pega.",
        "Streamline operations and elevate customer experiences using Pega’s intelligent process automation.",
      ],
      url: "/services/pega",
      logo: pegaImg,
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [slideDirection, setSlideDirection] = useState("next");

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setSlideDirection("next");
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  const goToSlide = (index) => {
    if (index === currentSlide) return;
    setSlideDirection(index > currentSlide ? "next" : "prev");
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full lg:h-[675px] md:h-[800px] h-[1000px] overflow-hidden">
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === currentSlide
                ? "opacity-100 translate-x-0"
                : index < currentSlide
                ? "opacity-0 -translate-x-full"
                : "opacity-0 translate-x-full"
            }`}
          >
            <div className="relative flex items-center justify-center p-3 overflow-hidden ">
              {/* Main slide container */}
              <div className="relative  rounded-2xl bg-white shadow-[0px_0px_10px_5px_rgba(0,0,0,0.25)] " 
              style={{
                     backgroundImage: `url(${slide.bg})`,
                     backgroundSize: "cover",
                     backgroundPosition: "center",
                     backgroundRepeat: "no-repeat",
                        }}
                        onMouseEnter={() => setIsPlaying(false)}
                        onMouseLeave={() => setIsPlaying(true)}
                   >
                <div className="flex flex-col lg:flex-row items-center lg:justify-between">
                  {/* Logo placeholder on the left */}
                  <div className="lg:w-3/7 p-15 flex justify-center align-center">
                    <img
                      src={slides[currentSlide].logo}
                      alt={`${slides[currentSlide].title} logo`}
                      className=" object-contain h-50 lg:h-auto w"
                    />
                  </div>

                  {/* Content card on the right */}
                  <div className="lg:w-4/7 w-[86vw]">
                    <div className="flex flex-col items-left rounded p-5 lg:p-10 relative">
                      <div>
                         <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-5 ${slide.titleColor}`}>
                          {slides[currentSlide].title}
                        </h2>
                        
                      </div>
                      <ul className="space-y-4 list-disc list-inside">
                        {slides[currentSlide].content.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            {item}
                          </li>
                        ))}
                      </ul>
                      <NavLink
                        to={slide.url}
                        className="mt-8 text-green-500 font-bold text-lg"
                      >
                        View More
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Slide indicators */}
      <div className="absolute left-0 right-0 bottom-0 flex justify-center mt-8">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-8 h-2 mx-1 rounded-full transition-colors duration-300 ${
              index === currentSlide ? "bg-green-500" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedSlideshow;
