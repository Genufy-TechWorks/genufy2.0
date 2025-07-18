import { useState, useEffect } from "react";
import salesforceImg from "../assets/img/Salesforce.png";
import mobileappImg from "../assets/img/mobile_app.webp";
import webdevelopImg from "../assets/img/web_development.png";
import informaticaImg from "../assets/img/informatica.png";
import bgline from "../assets/img/common-underline.svg";

const Slideshow = () => {
  const slides = [
    {
      title: "Salesforce",
      content: [
        "Salesforce is a leading cloud-based Customer Relationship Management (CRM) platform.",
        "It helps businesses streamline sales, marketing, and customer service processes.",
        "With powerful automation and analytics tools, it enhances productivity and customer engagement.",
        "Salesforce supports integrations with various third-party apps for seamless operations.",
        "It's widely used across industries to drive digital transformation and business growth.",
      ],
      logo: salesforceImg,
    },
    {
      title: "Informatica",
      content: [
        "HubSpot offers comprehensive inbound marketing, sales, and service software.",
        "The platform helps businesses attract visitors, convert leads, and close customers.",
        "It provides tools for content management, social media marketing, and SEO.",
        "HubSpot's CRM is free and integrates with their marketing and sales hubs.",
        "Companies use HubSpot to create personalized, seamless customer experiences.",
      ],
      logo: informaticaImg,
    },
    {
      title: "Web Development",
      content: [
        "Microsoft Dynamics is a line of enterprise resource planning and CRM applications.",
        "It offers AI-driven insights and mixed reality tools for business processes.",
        "The platform integrates seamlessly with other Microsoft productivity tools.",
        "It helps organizations accelerate digital transformation with data analytics.",
        "Microsoft Dynamics provides industry-specific solutions across manufacturing, retail, and more.",
      ],
      logo: webdevelopImg,
    },
    {
      title: "Mobile App Development",
      content: [
        "Microsoft Dynamics is a line of enterprise resource planning and CRM applications.",
        "It offers AI-driven insights and mixed reality tools for business processes.",
        "The platform integrates seamlessly with other Microsoft productivity tools.",
        "It helps organizations accelerate digital transformation with data analytics.",
        "Microsoft Dynamics provides industry-specific solutions across manufacturing, retail, and more.",
      ],
      logo: mobileappImg,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-transition effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  // Handle manual navigation
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative flex items-center justify-center p-3 overflow-hidden">
      {/* Main slide container */}
      <div className="relative ">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between">
          {/* Logo placeholder on the left */}
          <div className="lg:w-3/7 p-6">
            <img
              src={slides[currentIndex].logo}
              alt={`${slides[currentIndex].title} logo`}
              className="lg:pr-10 object-contain h-50 lg:h-auto"
            />
          </div>

          {/* Content card on the right */}
          <div className="lg:w-4/7">
            <div className="flex flex-col items-center  bg-white shadow-[0px_0px_10px_5px_rgba(0,0,0,0.25)] p-10 relative">
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-1">
                  {slides[currentIndex].title}
                </h2>
                <img src={bgline} alt="border-line" className="mb-8" />
              </div>
              <ul className="space-y-4 list-disc list-inside">
                {slides[currentIndex].content.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    {item}
                  </li>
                ))}
              </ul>

              <button className="mt-8 text-green-500 font-medium">
                View More
              </button>
            </div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="flex justify-center mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-8 h-2 mx-1 rounded-full transition-colors duration-300 ${
                index === currentIndex ? "bg-green-500" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
