import { NavLink } from "react-router-dom";
import ContactForm from "./contactform";
import topo from "../assets/img/topo-left.svg";
import topoRight from "../assets/img/topo-right.svg";
import sicon from "../assets/img/service_icon.svg";
import sicon2 from "../assets/img/service2.svg";
import bgline from "../assets/img/common-underline.svg";
import cera from "../assets/img/home-about-cera.png";
import vision from "../assets/img/vision.svg";
import mission from "../assets/img/mission.png";
import Newcarousel from "./newcarousel";

import "./home.scss";
import SfpartnerOff from "./sfpartneroff";

const home = () => {
  return (
    <div className="home">
      <div className="px-4 lg:px-7 flex flex-col items-center justify-center">
        <div className="home-intro lg:w-[50%] text-center py-20 lg:py-25">
          <div className="nav-item font-semibold text-[48px] leading-[65px]  lg:text-[96px] lg:leading-[117px]">
            Genufy
          </div>
          <div className="font-semibold text-[12px] leading-[15px] lg:text-[32px] lg:leading-[39px] tracking-[0.25rem] lg:mt-3">
            Nurturing Innovation from Every Corner
          </div>
          <div className="mt-4 mb-5 text-base lg:mt-8 lg:mb-10 lg:text-2xl lg:leading-[29px]">
            Genufy blends rural ingenuity with cutting-edge technology to craft
            digital solutions that scale globally and inspire universally.
          </div>
          <div>
            <NavLink
              to="/services"
              className="home-rmore rounded-full cursor-pointer text-xl lg:text-2xl lg:leading-[29px] font-semibold px-8 py-2 text-white"
            >
              Read More
            </NavLink>
          </div>
        </div>
        <div>
          <SfpartnerOff/>
        </div>

        <img
          src={topo}
          alt="bg-img"
          className="floating hidden lg:block absolute left-0 bottom-0 top-60 w-[360px]"
        />
        <img
          src={topoRight}
          alt="bg-img"
          className="floating hidden lg:block absolute right-0 bottom-0 top-120 w-[350px]"
        />
      </div>
      <div
        id="services"
        className="home-service lg:mt-25 px-4 lg:pl-15 lg:pr-30"
      >
        <div className="flex items-start">
          <div className="mt-1">
            <div className="flex items-center justify-center lg:justify-start">
              <img
                src={sicon}
                alt="service-icon"
                className="mr-4 w-[32px] h-[32px] lg:mr-8 lg:w-auto lg:h-auto"
              />
              <div>
                <div className="font-bold text-2xl leading-[29px] lg:text-[32px] lg:leading-[39px]">
                  What we offer
                </div>
                <div className="font-bold text-3xl leading-[37px] lg:text-5xl lg:leading-[59px]">
                  Our Service
                </div>
                <img src={bgline} alt="border-line" />
              </div>
            </div>
            <div className="mt-8 text-sm leading-[26px] text-center lg:text-left lg:text-xl lg:leading-[50px] lg:ml-28 font-medium lg:w-[55%]">
              From seamless system integrations to standout user experiences,
              our services are crafted to solve real problems and spark lasting
              impact. At Genufy TechWorks, we don’t just build we innovate,
              optimize, and future proof your digital journey. Whether you're
              optimizing workflows or launching the next big idea, we deliver
              with precision and passion.
            </div>
          </div>
        </div>
        <div className="mt-10 lg:mt-18 flex items-start">
          <img
            src={sicon2}
            alt="service-icon2"
            className="hidden lg:block mr-8"
          />
          <Newcarousel></Newcarousel>
        </div>
      </div>
      <div
        id="about"
        className="home-about mt-20 lg:mt-40 px-4 lg:pl-15 lg:pr-30"
      >
        <div className="flex items-center flex-col lg:items-start lg:flex-row home-about-align">
          <div className="mt-1">
            <div className="flex items-center justify-center lg:justify-start">
              <img
                src={sicon}
                alt="service-icon"
                className="lg:mr-8 mr-4 w-[32px] h-[32px] lg:mr-8 lg:w-auto lg:h-auto"
              />
              <div>
                <div className="font-bold text-3xl leading-[37px] lg:text-5xl lg:leading-[59px]">
                  About
                </div>
                <img
                  src={bgline}
                  alt="border-line"
                  className="w-[50px] h-[4px] lg:w-auto"
                />
                <div className="lg:mt-4 text-2xl leading-[29px] lg:text-[32px] lg:leading-[39px] font-bold bg-gradient-to-r from-[#85E669] to-[#2CBDA7] bg-clip-text text-transparent">
                  Meet Our Cera – Your Digital Success Guide
                </div>
              </div>
            </div>
            <div className="mt-8 flex items-start">
              <div className="lg:ml-28 font-medium text-sm leading-[26px] text-center lg:text-left lg:text-xl lg:leading-[50px] lg:ml-28">
                At GENUFY, innovation meets inspiration and Cera is the face of
                it all. More than just a mascot, Cera is your friendly tech
                companion on a mission to transform dreams into milestones. With
                a heart full of curiosity, a head packed with knowledge, and a
                spirit that embodies growth, guidance, and grit, Cera champions
                our core values: Empowerment, Innovation, and Connection. <br />
                Follow <b>#CeraTheGuide</b> and join us on a journey to smarter
                solutions, stronger communities, and future-ready possibilities.
              </div>
            </div>
          </div>

          <img
            src={cera}
            alt="cera-img"
            className="mt-10 w-[250px] lg:ml-20 lg:w-[350px] lg:mt-25"
          />
        </div>
      </div>
      <div className="home-vision px-4 flex lg:flex-row flex-col-reverse justify-between items-center lg:pl-30 lg:pr-30 mt-10">
        <img
          src={vision}
          alt="vision-img"
          className="lg:w-auto w-[250px]  mt-8 lg:mt-0"
        />
        <div className="text-center lg:text-right lg:max-w-[45%]">
          <div className="">
            <div className="inline-block relative">
              <div className="text-3xl leading-[37px] lg:text-4xl font-bold lg:leading-[2.75rem]">
                Our Vision
              </div>
              <img
                src={bgline}
                alt="underline"
                className="absolute bottom-[-8px] left-1 lg:right-20 w-[103px]"
              />
            </div>
          </div>

          <div className="mt-4 text-sm leading-[26px] lg:text-xl lg:leading-[50px] font-medium">
            Our vision is to become a global leader in digital innovation,
            empowering startups, enterprises, and brands to lead with
            technology, grow fearlessly, and build meaningful user experiences.
            We envision a future where every organization harnesses the full
            power of digital to scale smarter, faster, and better.
          </div>
        </div>
      </div>
      <div className="home-mission px-4 flex lg:flex-row flex-col justify-between items-center lg:pl-30 lg:pr-30 mt-10">
        <div className="text-center lg:text-left lg:max-w-[45%]">
          <div className="">
            <div className="inline-block relative">
              <div className="text-3xl leading-[37px] lg:text-4xl font-bold lg:leading-[2.75rem]">
                Our Mission
              </div>
              <img
                src={bgline}
                alt="underline"
                className="absolute bottom-[-8px] left-1 lg:right-20 w-[103px]"
              />
            </div>
          </div>

          <div className="mt-4 text-sm leading-[26px] lg:text-xl lg:leading-[50px] font-medium">
            At Genufy TechWorks, our mission is to accelerate digital
            transformation for businesses by delivering custom software
            solutions, Salesforce expertise, and next-gen digital platforms. We
            exist to bridge the gap between vision and execution turning bold
            ideas into scalable, efficient, and future-ready technology.
          </div>
        </div>
        <img
          src={mission}
          alt="mission-img"
          className="lg:w-[450px] w-[250px] "
        />
      </div>
      <div
        id="contact"
        className="home-contact home-about-align px-4 mt-15 lg:mt-25 lg:px-15"
      >
        <div className="flex items-start">
          <div className="mt-1">
            <div className="flex items-center justify-center lg:justify-start">
              <img
                src={sicon}
                alt="service-icon"
                className="lg:mr-8 mr-4 w-[32px] h-[32px] lg:mr-8 lg:w-auto lg:h-auto"
              />
              <div>
                <div className="font-bold text-2xl leading-[29px] lg:text-[32px] lg:leading-[39px]">
                  Let’s Talk
                </div>
                <div className="font-bold text-3xl leading-[37px] lg:text-5xl lg:leading-[59px]">
                  Contact Us Now
                </div>
                <img src={bgline} alt="border-line" />
              </div>
            </div>
            <div className="mt-8 text-sm leading-[26px] text-center lg:text-left lg:text-xl lg:leading-[50px] lg:ml-28 font-medium lg:w-[75%]">
              Ready to accelerate your digital growth or build something
              extraordinary? <br />
              Our experts are just one click away. Whether you need a powerful
              solution or simply want to explore an idea, we’re here to turn it
              into reality.
              <br />
              Just fill out the form below we’ll be in touch shortly.
            </div>
          </div>
        </div>
      </div>
      <ContactForm></ContactForm>
    </div>
  );
};

export default home;
