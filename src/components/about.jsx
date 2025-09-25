import aboutbg from "../assets/img/about-hero-bg.jpg";
import bgline from "../assets/img/common-underline.svg";
import sicon from "../assets/img/service_icon.svg";
import icon1 from "../assets/img/about-choose-us-icon-career.svg";
import icon2 from "../assets/img/about-choose-us-icon-quality.svg";
import icon3 from "../assets/img/about-choose-us-icon-innovative.svg";
import icon4 from "../assets/img/about-choose-us-icon-delivery.svg";
import ceraGif from "../assets/img/about-mascot-cera.gif";
import SfpartnerOff from "./sfpartneroff";

const About = () => {
  const chooseUs = [
    { title: "Why Choose Us", subtitle: "Career support", icon: icon1 },
    { title: "Quality Driven", subtitle: "Quality support", icon: icon2 },
    { title: "Innovative", subtitle: "Thinking", icon: icon3 },
    {
      title: "On Time Delivery",
      subtitle: "Time delivery",
      icon: icon4,
    },
  ];
  return (
    <div className="bg-white space-y-16">
      {/* Hero Section */}
      <section
        className="relative lg:h-[500px] h-[250px] bg-cover bg-center mb-0"
        style={{ backgroundImage: `url(${aboutbg})` }}
      >
        <div className="absolute inset-0 bg-opacity-40 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-xl leading-[26px] lg:text-[40px] lg:leading-[50px] font-bold">
            Shaping the Future Through 
            <br />
            Technology and Vision
          </h1>
        </div>
      </section>

      <div className="px-4 lg:pl-12 lg:pr-15 lg:pt-25 pt-11 lg:pb-15 pb-3">
        {/* About Section */}
        <section className="mx-auto px-4 md:px-0">
          <div className="flex flex-col lg:flex-row items-start md:items-center justify-between">
            <div className="space-y-4 lg:w-[65%]">
              <div className="flex items-center">
                <img
                  src={sicon}
                  alt="Icon"
                  className="lg:w-[84px] ml-5 lg:ml-0 lg:mr-7 mr-10 w-8"
                />
                <h2 className="text-3xl lg:text-5xl font-bold inline-block pb-1">
                  Built from Struggles, Grown with Purpose
                  <img
                    src={bgline}
                    alt="border-line"
                    className="w-15 lg:w-auto mt-2"
                  />
                </h2>
              </div>
              <div className="lg:ml-29 text-sm leading-[26px] mt-6 lg:text-xl lg:leading-[50px] text-center lg:text-left">
                <p className="mb-3">
                  Genufy TechWorks was born not in a boardroom, but from the
                  real-life struggles of a group of passionate individuals from
                  rural India. Coming from humble backgrounds, we faced immense
                  challenges when stepping into the fast-paced IT industry from
                  limited exposure to lack of access, to the pressure of
                  relocating to metro cities just to find an opportunity.
                </p>
                That journey shaped us. It inspired one powerful idea
                <br />
                <b>
                  Why not build something right here in our hometown that gives
                  others the opportunity we fought so hard for?
                </b>
                <p>
                  {" "}
                  With that spark, Genufy was founded. Not just as a tech
                  company, but as a movement to empower rural talent, break down
                  geographic barriers, and prove that great innovation can start
                  anywhere. Today, all you need is skill, internet, and a vision
                  and we bring all three together from the heart of rural India.
                </p>
                <p>
                  We’ve grown into a digital transformation company offering
                  cutting-edge services in Salesforce, Web and Mobile
                  Development, Informatica, AI, UI/UX, and more but our roots
                  keep us grounded, and our mission keeps us moving
                </p>
                <b>
                  To bridge the rural-urban gap in tech and give every deserving
                  mind a platform to shine.
                </b>{" "}
                <p>
                  We’re not just building tech solutions. We’re building futures
                  from the ground up.
                </p>
              </div>
            </div>
            <div className="lg:w-[35%] lg:pl-30 text-center mt-8 lg:mt-0 self-center">
              <img
                src={ceraGif}
                alt="Mascot"
                className="lg:w-[300px] w-[200px]"
              />
            </div>
          </div>
        </section>

        <div>
          <SfpartnerOff />
        </div>

        {/* Why Choose Us */}
        <section className="lg:mt-30 mt-10 text-center lg:mx-29">
          <h2 className="lg:text-5xl text-3xl leading-[50px] font-bold lg:mb-18 mb-8">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 px-10 md:px-0 lg:grid-cols-4 gap-6">
            {chooseUs.map((item, idx) => (
              <div
                key={idx}
                className="p-3 pb-0 lg:p-4 shadow-[0px_0px_5px_rgba(0,0,0,0.5)] rounded-md text-center"
              >
                <div className="flex justify-center">
                  <img
                    className="mb-2 w-11 lg:w-[77px] lg:h-[77px]"
                    src={item.icon}
                  />
                </div>
                <h4 className="font-semibold text-base lg:text-2xl leading-[50px] text-[#5FD484]">
                  {item.title}
                </h4>
                <p className="text-xl leading-[50px]">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Meet Our Team */}
        <section className="lg:mt-25 mt-10 lg:mx-29 text-center ">
          <h2 className="lg:text-5xl text-3xl leading-[50px] font-bold">
            Meet the Minds Behind Genufy
          </h2>
          <div className="lg:text-xl mt-6 lg:leading-[50px] text-sm leading-[26px]">
            At Genufy TechWorks, we go far beyond. Our expertise extends across
            Salesforce, web development, mobile app development, custom
            software, e-commerce platforms, and AI-powered applications. From
            scalable CRM implementations to robust apps for healthcare,
            education, retail, and finance, we build intelligent digital
            solutions tailored to your business goals.
            <br />
            <br /> What sets us apart is our strong team architecture. We have
            specialized Centers of Excellence for each domain including
            Salesforce, Web, Mobile, and Informatica supported by dedicated core
            engineering teams, support units, and R&D divisions. This
            collaborative model ensures innovation, reliability, and continuous
            delivery at every stage of your digital journey.
          </div>
        </section>

        {/* CRM Success CTA */}
        <section className="lg:mx-29 lg:mt-20 mt-8 text-center">
          <h2 className="lg:text-5xl text-2xl leading-[50px] font-bold">
            Let’s Talk Digital Growth!
          </h2>
          <p className="lg:text-xl text-sm leading-[26px] lg:leading-[50px] mt-2">
            Whether you're a startup or an enterprise, Genufy is here to be your
            strategic digital partner.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
