import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import salesforceImg from "../assets/img/Salesforceicon.png";
import mobileappImg from "../assets/img/Mobileicon.png";
import webdevelopImg from "../assets/img/webicon.png";
import informaticaImg from "../assets/img/informaticaicon.png";
import aiImg from "../assets/img/AIicon.png";
import pegaImg from "../assets/img/pegaicon.png";
import snowflakeImg from "../assets/img/snowflakeimg.svg";

import sfbg from "../assets/img/sfbackimg.png";
import informbg from "../assets/img/carouselbg.png";
import aibg from "../assets/img/carouselbg.png";
import webbg from "../assets/img/carouselbg.png";
import mobbg from "../assets/img/carouselbg.png";
import pegabg from "../assets/img/carouselbg.png";
import snowbg from "../assets/img/carouselbg.png";

const AnimatedSlideshow = () => {
  const slides = [
    {
      title: "AI Solutions",
      titleColor:
        "text-2xl font-bold bg-gradient-to-r from-[#30BFA4] to-[#85E668] bg-clip-text text-transparent",
      bg: aibg,
      content: [
        "We are integrating Artificial Intelligence (AI) across our solutions to enhance efficiency, accuracy, and innovation.",
        "At Genufy Techworks, we’re committed to building intelligent systems that transform how businesses operate in the digital era.",
        "Our AI-driven models optimize business workflows and deliver real-time intelligence for smarter operations.",
        "We use AI and automation to turn data into valuable insights.",
        "Our AI-powered platforms turn raw data into real-time insights for smarter, faster operations.",
      ],
      url: "/services/aisolutions",
      logo: aiImg,
    },
    {
      title: "Salesforce",
      bg: sfbg,
      titleColor: "text-blue-400",
      content: [
        "Empower your customer experience with expert Salesforce services.",
        "We help businesses maximize ROI on Salesforce through scalable, integrated, and automated solutions.",
        "Custom development of Lightning Web Components (LWC) and Aura Components.",
        "End-to-end CRM automation using Apex, Flows, and Process Builder.",
        "Third-party API integration (REST/SOAP) for unified platforms.",
        // "Data modeling and architecture tailored to business logic",
        "Performance tuning, security configurations, and user adoption strategies.",
      ],
      url: "/services/salesforce",
      logo: salesforceImg,
    },
    {
      title: "Informatica",
      bg: informbg,
      titleColor: "text-orange-400",
      content: [
        "Cloud-first data integration and automation with Informatica IICS.",
        "We streamline data transfer and ETL operations with secure, efficient, and scalable workflows.",
        "Monitor and manage all ETL workflows for continuous data sync.",
        "Automate data pipelines and trigger alerts on job failures.",
        "Secure Agent configuration for encrypted data transfers.",
        "Seamless integration across diverse data sources and targets.",
        "SQL optimization and job re-triggering for flawless data delivery.",
      ],
      url: "/services/informatica",
      logo: informaticaImg,
    },
    {
      title: "Snowflake",
      bg: pegabg,
      titleColor: "text-blue-400",
      content: [
        "Leverage Snowflake's Data Cloud to unite your siloed data into a single source of truth.",
        "Discover and securely share live data across your organization and with external partners without copying.",
        // "Execute diverse analytic workloads including Data Warehousing, Data Lakes, and Data Science with speed and efficiency.",
        "Ensure seamless data collaboration and governance with built-in security and compliance features.",
        "Scale instantly and infinitely to handle any amount of data and any number of concurrent users.",
        "Optimize costs with per-second pricing and automatic suspension of unused compute resources."
      ],
      url: "/services/snowflake",
      logo: snowflakeImg,
    },
    {
      title: "Web Development",
      bg: webbg,
      titleColor:
        "text-2xl font-bold bg-gradient-to-r from-[#30BFA4] to-[#85E668] bg-clip-text text-transparent",
      content: [
        "SEO-optimized, scalable websites and web apps built to convert.",
        "We specialize in creating high-performance web platforms that engage users and drive measurable results.",
        "Full-stack development with modern tech (React, Node, Angular, Vue, etc.)",
        "Custom CMS and eCommerce platforms for business flexibility.",
        // "Responsive web design for mobile, tablet, and desktop",
        "SEO fundamentals baked into every build for better rankings.",
        "Lightning-fast load times and top-tier security practices.",
      ],
      url: "/services/webdevelopment",
      logo: webdevelopImg,
    },
    {
      title: "Mobile App Development",
      bg: mobbg,
      titleColor:
        "text-2xl font-bold bg-gradient-to-r from-[#30BFA4] to-[#85E668] bg-clip-text text-transparent",
      content: [
        "Build next-gen mobile apps for iOS, Android, and beyond.",
        "From concept to launch, we create mobile experiences that your users love and your business needs.",
        "Cross-platform and native mobile app development.",
        "UI/UX design tailored for mobile user behavior.",
        "Real-time sync, offline mode, and third-party integrations.",
        "Scalable architecture with secure backend APIs.",
        "App Store and Play Store launch support with version control.",
      ],
      url: "/services/mobileappdevelopment",
      logo: mobileappImg,
    },
    {
      title: "Pega",
      bg: pegabg,
      titleColor: "text-[#076bc9]-400",
      content: [
        "Empower your enterprise with intelligent automation and AI-driven decisioning through Pega.",
        "Automate, optimize, and innovate faster with Pega’s low-code intelligent automation platform.",
        "Cross-platform and native mobile app development.",
        "Transform business processes with Pega’s AI-powered automation and seamless workflow orchestration.",
        "Drive smarter decisions and effortless automation with the power of Pega.",
        "Pega’s intelligent automation improves operations and customer experiences."
      ],
      url: "/services/pega",
      logo: pegaImg,
    },
    {
      title: "Snowflake",
      bg: snowbg,
      titleColor: "text-blue-500",
      content: [
        "Leverage Snowflake's Data Cloud to unite your siloed data into a single source of truth.",
        "Discover and securely share live data across your organization and with external partners without copying.",
        "Execute diverse analytic workloads including Data Warehousing, Data Lakes, and Data Science with speed and efficiency.",
        "Ensure seamless data collaboration and governance with built-in security and compliance features.",
        "Scale instantly and infinitely to handle any amount of data and any number of concurrent users.",
        "Optimize costs with per-second pricing and automatic suspension of unused compute resources.",
      ],
      url: "/services/snowflake",
      logo: snowflakeImg,
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const [slideDirection, setSlideDirection] = useState("next");
  // const slideshowRef = useRef(null);

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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;

    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide(); // swipe left
      else prevSlide(); // swipe right
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  const handleTap = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div className="relative w-full lg:h-[675px] md:h-[800px] h-[750px] overflow-hidden">
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${getSlideClass(index)}`}
          >
            <div className="relative flex items-center justify-center p-3 overflow-hidden h-full">
              {/* Main slide container */}
              <div
                className="relative  rounded-2xl bg-white shadow-[0px_0px_10px_5px_rgba(0,0,0,0.25)] "
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
                        <h2
                          className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-5 ${slide.titleColor}`}
                        >
                          {slides[currentSlide].title}
                        </h2>
                      </div>
                      <ul className="space-y-4 list-disc list-inside">
                        {(() => {
                          const isBelow1250 = window.innerWidth <= 1250;
                          const current = slides[currentSlide];
                          let visiblePoints = current.content;

                          if (isBelow1250) {
                            if (current.title === "AI Solutions") {
                              // show all points (do nothing)
                              visiblePoints = current.content.slice(
                                0,
                                current.content.length - 1
                              );
                            } else {
                              // hide last 2 points for all other slides
                              visiblePoints = current.content.slice(
                                0,
                                current.content.length - 1
                              );
                            }
                          }

                          return visiblePoints.map((point, idx) => (
                            <li key={idx} className="flex items-start">
                              {point}
                            </li>
                          ));
                        })()}
                      </ul>

                      <NavLink
                        to={slide.url}
                        className="mt-8 font-bold text-lg bg-white 
                      bg-gradient-to-r from-[#30BFA4] to-[#85E668] bg-clip-text text-transparent"
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
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/3 -translate-y-1/2 bg-white/70 hover:bg-white p-1 lg:p-3 rounded-full shadow-lg z-0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          className="w-5 h-4"
        >
          <path d="M201.4 297.4C188.9 309.9 188.9 330.2 201.4 342.7L361.4 502.7C373.9 515.2 394.2 515.2 406.7 502.7C419.2 490.2 419.2 469.9 406.7 457.4L269.3 320L406.6 182.6C419.1 170.1 419.1 149.8 406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3L201.3 297.3z" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/3 -translate-y-1/2 bg-white/70 hover:bg-white p-1 lg:p-3 rounded-full shadow-lg z-0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          className="w-5 h-4 transform rotate-180"
        >
          <path d="M201.4 297.4C188.9 309.9 188.9 330.2 201.4 342.7L361.4 502.7C373.9 515.2 394.2 515.2 406.7 502.7C419.2 490.2 419.2 469.9 406.7 457.4L269.3 320L406.6 182.6C419.1 170.1 419.1 149.8 406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3L201.3 297.3z" />
        </svg>
      </button>
    </div>
  );
};

export default AnimatedSlideshow;
