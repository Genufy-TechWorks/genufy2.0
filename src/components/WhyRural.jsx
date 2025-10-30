const WhyRural = () => {
  const sections = [
    {
      title: "Breaking the Urban-Centric Work Culture",
      description:
        "For decades, India's IT industry has been centered around major cities like Bengaluru, Chennai, Hyderabad, and Pune. This concentration of opportunities has led to overpopulation, high living costs, and immense stress due to daily commuting. By setting up our company in a rural location, we are contributing to decentralization, allowing professionals to work in an environment that fosters better work-life balance.",
    },
    {
      title: "Creating Local Job Opportunities",
      description:
        "Our mission is to identify and nurture untapped rural talent. Many young graduates from Tier III and IV cities migrate to metros in search of employment, often facing financial burdens and social challenges. By bringing opportunities closer to their hometowns, we help them secure quality jobs while staying close to their families and communities. This not only enhances their productivity but also significantly improves their quality of life.",
    },
    {
      title: "Reducing Migration, Strengthening Families",
      description:
        "In large cities, people often spend long hours commuting, missing out on valuable time with their loved ones. Festival seasons turn into stressful experiences with overcrowded trains and buses. By establishing a technology company in a rural setting, we enable professionals to enjoy a fulfilling career without sacrificing personal time and family bonds.",
    },
    {
      title: "Cost-Effective and Sustainable Growth",
      description:
        "Operating from a rural area reduces overhead costs such as rent, utilities, and daily expenses, allowing businesses to allocate resources more efficiently. Additionally, the serene and pollution-free environment promotes a healthier and more focused workforce, ultimately leading to increased innovation and efficiency.",
    },
    {
      title: "Boosting Local Economy & Community Development",
      description:
        "A company in a rural setting does more than just provide jobs it stimulates the entire local economy. Small businesses, real estate, education, and healthcare sectors all benefit from the presence of a growing IT ecosystem. This, in turn, discourages urban migration and encourages sustainable development within the region.",
    },
  ];

  return (
    <div>
      <div className="max-w-6xl mx-auto lg:px-8 px-4 py-15 space-y-12">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`rounded-lg shadow-[0px_0px_10px_rgba(0,0,0,0.25)] bg-gradient-to-b from-[#99F964] to-[#2FEBD4] ${
              index % 2 == 0 ? "pl-2" : "pr-2"
            }`}
          >
            <div className="lg:py-10 lg:px-18 p-3 bg-white transition-all duration-500 ease-in-out
hover:-translate-x-2 hover:translate-x-2 hover:shadow-[0_10px_20px_rgba(0,0,0,0.3)] 
hover:bg-gradient-to-r hover:from-[#e8fff7] hover:to-[#f9fffa]">
              <h2 className="text-[15px] leading-[18px] lg:text-2xl lg:leading-[29px] font-bold mb-7">
                {section.title}
              </h2>
              <p className="text-[11px] leading-[20px] lg:text-base lg:leading-[36px] font-medium">
                {section.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyRural;
