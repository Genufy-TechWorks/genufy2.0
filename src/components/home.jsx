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
// import informsales from "../assets/img/Infor&sales.webp";
import Newcarousel from "./newcarousel";
// import Blog from "./blog";

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
        className="home-about lg: px-4 lg:pl-15 lg:pr-30"
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
                <div className="font-bold text-3xl leading-[37px] lg:text-5xl lg:leading-[59px] mt-8 lg:mt-1">
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
                At Genufy, innovation meets inspiration and Cera is the face of
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
      <br />
      
      {/* //Blog Section */}
      {/* <section className="blog-section px-4 lg:px-30 mt-10 mb-15">
        <div className="text-center mb-8">
          <h3 className="text-3xl lg:text-4xl font-semibold">Our Blog</h3>
          <h2 className="text-2xl lg:text-4xl font-bold bg-gradient-to-r from-[#85E669] to-[#2CBDA7] bg-clip-text text-transparent mt-2">Resources and insights</h2>
          <p className="text-sm lg:text-base text-gray-600 mt-2">The latest industry news, interviews, technologies, and resources.</p>
        </div>

        <div className="grid grid-cols-1 pt-6 md:grid-cols-3 gap-8">
         
          <article className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={informsales} alt="blog-1" className="w-full h-44 object-cover" />
            <div className="p-6">
              <span className="text-xs text-[#7b61ff]">Design</span>
              <a href="http://localhost:5173/services"><div className="flex gap-10">
              <h4 className="mt-3 text-lg font-semibold text-[#0D0C41]">UX review presentations</h4>
              <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 640 640" className="mt-3">
              <path fill="#0D0C41" d="M451.5 160C434.9 160 418.8 164.5 404.7 172.7C388.9 156.7 370.5 143.3 350.2 133.2C378.4 109.2 414.3 96 451.5 96C537.9 96 608 166 608 252.5C608 294 591.5 333.8 562.2 363.1L491.1 434.2C461.8 463.5 422 480 380.5 480C294.1 480 224 410 224 323.5C224 322 224 320.5 224.1 319C224.6 301.3 239.3 287.4 257 287.9C274.7 288.4 288.6 303.1 288.1 320.8C288.1 321.7 288.1 322.6 288.1 323.4C288.1 374.5 329.5 415.9 380.6 415.9C405.1 415.9 428.6 406.2 446 388.8L517.1 317.7C534.4 300.4 544.2 276.8 544.2 252.3C544.2 201.2 502.8 159.8 451.7 159.8zM307.2 237.3C305.3 236.5 303.4 235.4 301.7 234.2C289.1 227.7 274.7 224 259.6 224C235.1 224 211.6 233.7 194.2 251.1L123.1 322.2C105.8 339.5 96 363.1 96 387.6C96 438.7 137.4 480.1 188.5 480.1C205 480.1 221.1 475.7 235.2 467.5C251 483.5 269.4 496.9 289.8 507C261.6 530.9 225.8 544.2 188.5 544.2C102.1 544.2 32 474.2 32 387.7C32 346.2 48.5 306.4 77.8 277.1L148.9 206C178.2 176.7 218 160.2 259.5 160.2C346.1 160.2 416 230.8 416 317.1C416 318.4 416 319.7 416 321C415.6 338.7 400.9 352.6 383.2 352.2C365.5 351.8 351.6 337.1 352 319.4C352 318.6 352 317.9 352 317.1C352 283.4 334 253.8 307.2 237.5z"/>
              </svg>
              </div></a>
              <p className="mt-2 text-sm text-gray-600 leading-[24px]">
                How do you create compelling presentations that wow your colleagues and impress your managers?
              </p>
            </div>
          </article>

          
          <article className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={informsales} alt="blog-2" className="w-full h-44 object-cover" />
            <div className="p-6">
              <span className="text-xs text-[#7b61ff]">Design</span>
              <div className="flex gap-10">
              <h4 className="mt-3 text-lg font-semibold text-[#0D0C41]">UX review presentations</h4>
              <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 640 640" className="mt-3">
              <path fill="#0D0C41" d="M451.5 160C434.9 160 418.8 164.5 404.7 172.7C388.9 156.7 370.5 143.3 350.2 133.2C378.4 109.2 414.3 96 451.5 96C537.9 96 608 166 608 252.5C608 294 591.5 333.8 562.2 363.1L491.1 434.2C461.8 463.5 422 480 380.5 480C294.1 480 224 410 224 323.5C224 322 224 320.5 224.1 319C224.6 301.3 239.3 287.4 257 287.9C274.7 288.4 288.6 303.1 288.1 320.8C288.1 321.7 288.1 322.6 288.1 323.4C288.1 374.5 329.5 415.9 380.6 415.9C405.1 415.9 428.6 406.2 446 388.8L517.1 317.7C534.4 300.4 544.2 276.8 544.2 252.3C544.2 201.2 502.8 159.8 451.7 159.8zM307.2 237.3C305.3 236.5 303.4 235.4 301.7 234.2C289.1 227.7 274.7 224 259.6 224C235.1 224 211.6 233.7 194.2 251.1L123.1 322.2C105.8 339.5 96 363.1 96 387.6C96 438.7 137.4 480.1 188.5 480.1C205 480.1 221.1 475.7 235.2 467.5C251 483.5 269.4 496.9 289.8 507C261.6 530.9 225.8 544.2 188.5 544.2C102.1 544.2 32 474.2 32 387.7C32 346.2 48.5 306.4 77.8 277.1L148.9 206C178.2 176.7 218 160.2 259.5 160.2C346.1 160.2 416 230.8 416 317.1C416 318.4 416 319.7 416 321C415.6 338.7 400.9 352.6 383.2 352.2C365.5 351.8 351.6 337.1 352 319.4C352 318.6 352 317.9 352 317.1C352 283.4 334 253.8 307.2 237.5z"/></svg>
              </div>
              <p className="mt-2 text-sm text-gray-600 leading-[24px]">
                How do you create compelling presentations that wow your colleagues and impress your managers?
              </p>
            </div>
          </article>

          
          <article className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={informsales} alt="blog-3" className="w-full h-44 object-cover" />
            <div className="p-6">
              <span className="text-xs text-[#7b61ff]">Design</span>
              <div className="flex gap-10">
              <h4 className="mt-3 text-lg font-semibold text-[#0D0C41]">UX review presentations</h4>
              <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 640 640" className="mt-3">
              <path fill="#0D0C41" d="M451.5 160C434.9 160 418.8 164.5 404.7 172.7C388.9 156.7 370.5 143.3 350.2 133.2C378.4 109.2 414.3 96 451.5 96C537.9 96 608 166 608 252.5C608 294 591.5 333.8 562.2 363.1L491.1 434.2C461.8 463.5 422 480 380.5 480C294.1 480 224 410 224 323.5C224 322 224 320.5 224.1 319C224.6 301.3 239.3 287.4 257 287.9C274.7 288.4 288.6 303.1 288.1 320.8C288.1 321.7 288.1 322.6 288.1 323.4C288.1 374.5 329.5 415.9 380.6 415.9C405.1 415.9 428.6 406.2 446 388.8L517.1 317.7C534.4 300.4 544.2 276.8 544.2 252.3C544.2 201.2 502.8 159.8 451.7 159.8zM307.2 237.3C305.3 236.5 303.4 235.4 301.7 234.2C289.1 227.7 274.7 224 259.6 224C235.1 224 211.6 233.7 194.2 251.1L123.1 322.2C105.8 339.5 96 363.1 96 387.6C96 438.7 137.4 480.1 188.5 480.1C205 480.1 221.1 475.7 235.2 467.5C251 483.5 269.4 496.9 289.8 507C261.6 530.9 225.8 544.2 188.5 544.2C102.1 544.2 32 474.2 32 387.7C32 346.2 48.5 306.4 77.8 277.1L148.9 206C178.2 176.7 218 160.2 259.5 160.2C346.1 160.2 416 230.8 416 317.1C416 318.4 416 319.7 416 321C415.6 338.7 400.9 352.6 383.2 352.2C365.5 351.8 351.6 337.1 352 319.4C352 318.6 352 317.9 352 317.1C352 283.4 334 253.8 307.2 237.5z"/>
              </svg>
              </div>
              <p className="mt-2 text-sm text-gray-600 leading-[24px]">
                How do you create compelling presentations that wow your colleagues and impress your managers?
              </p>
            </div>
          </article>
        </div>
      </section> */}
      {/* <Blog></Blog> */}
      <br />
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
