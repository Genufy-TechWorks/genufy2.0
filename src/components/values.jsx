import value1 from "../assets/img/value1.svg";
import value2 from "../assets/img/value2.svg";
import value3 from "../assets/img/value3.svg";
import value4 from "../assets/img/value4.svg";


const CompanyValues = () => {
  const values = [
    {
      id: 1,
      title: "Honor Every Voice",
      description:
        "Treat everyone with respect and recognize the value they bring. We believe in creating an inclusive environment where every team member feels heard, valued, and empowered to contribute their best.",
      icon: value1,
      position: "right",
    },
    {
      id: 2,
      title: "Thrive with Our Clients",
      description:
        "Grow alongside our clients, ensuring mutual success. We are dedicated to building strong, collaborative partnerships that drive innovation and deliver exceptional results.",
      icon: value2,
      position: "left",
    },
    {
      id: 3,
      title: "Succeed Together",
      description:
        "Treat everyone with respect and recognize the value they bring. We believe in creating an inclusive environment where every team member feels heard, valued, and empowered to contribute their best.",
      icon: value3,
      position: "right",
    },
    {
      id: 4,
      title: "Lead with Integrity",
      description:
        "Treat everyone with respect and recognize the value they bring. We believe in creating an inclusive environment where every team member feels heard, valued, and empowered to contribute their best.",
      icon: value4,
      position: "left",
    },
  ];

  return (
    <div>
      {/* Values Section */}
      <div className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 lg:space-y-24">
            {values.map((value, index) => (
              <div
                key={value.id}
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                  value.position === "left" ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Icon/Illustration */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 lg:w-48 lg:h-48  flex items-center justify-center">
                    <img src={value.icon} alt="value-icon" />
                  </div>
                </div>

                {/* Content */}
                <div
                  key={index}
                  className="pl-2 rounded-lg shadow-[0px_0px_10px_rgba(0,0,0,0.25)] bg-gradient-to-b from-[#99F964] to-[#2FEBD4]"
                >
                  <div className="lg:py-10 lg:px-18 p-3 bg-white transition-all duration-500 ease-in-out
hover:-translate-y-2 hover:translate-y-2 hover:shadow-[0_10px_20px_rgba(0,0,0,0.3)] 
hover:bg-gradient-to-r hover:from-[#e8fff7] hover:to-[#f9fffa]">
                    <h2 className="text-[15px] leading-[18px] lg:text-2xl lg:leading-[29px] font-bold mb-7">
                      {value.title}
                    </h2>
                    <p className="text-[11px] leading-[20px] lg:text-base lg:leading-[36px] font-medium">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyValues;
