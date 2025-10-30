import cuate from "./../assets/img/products-hero-illustration.svg";
import expense from "./../assets/img/products-expense-manager-logo.svg";
import extension from "./../assets/img/products-dev-inspector-logo.png";
import qms from "./../assets/img/qms.jpg";
import pstock from "./../assets/img/pharmastock.png";

const Products = () => {
  const productList = [
    {
      name: "Expense Manager",
      type: "Mobile Application",
      path: expense,
    },
    {
      name: "Dev Inspector",
      type: "Salesforce chrome extension",
      path: extension,
      url: "https://chromewebstore.google.com/detail/gmokcalgglefgdhfimedlkanpohobkof?utm_source=item-share-cb",
    },
    {
      name: "Pharma Stock",
      type: "Pharmacy stock management",
      path: pstock,
    },
    {
      name: "QMS",
      type: "Quality Management System",
      path: qms,
    },
  ];
  return (
    <div className="lg:mt-40 mt-30 px-4 lg:px-30 pb-10 lg:pb-20">
      <div className="">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-20">
          <div className="flex-1">
            <h1 className="lg:text-[40px] text-[32px]  lg:leading-[49px] lg:mb-6 mb-3 font-bold text-[#0D0D40] [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)]">
              Products
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-[#0D0D40] mb-8 lg:leading-[50px]">
              Building a Smarter Future
              <br />
              with Innovative Technologies
            </h2>
            <p className="lg:text-xl text-md text-justify text-[#0F0D41] lg:leading-[33px]">
              At Genufy TechWorks, our values are the foundation of our culture
              and guide every decision we make. These principles reflect our
              commitment to excellence, integrity, and making a positive impact
              on our community and the world.
            </p>
          </div>

          {/* Illustration */}
          <div className="flex-1 flex justify-center relative mt-20 lg:m-0">
            <div className="relative">
              <img src={cuate} alt="products illustration" />
            </div>
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {productList.map((product) => {
            return (
              <a
                href={product.url}
                target="_blank"
                className="bg-[#0d0c41] rounded-[34px] p-3 flex items-center gap-4"
              >
                <div className="bg-white rounded-[20px] p-2 text-center">
                  <img
                    src={product.path}
                    alt={product.name}
                    className={`object-contain rounded-[20px] ${product.name === "Expense Manager"
                        ? "w-[80px] h-[70px] md:w-[95px] md:h-[95px] border-5 border-[#0D0D40]-500"
                        : "w-[100px] h-[70px] md:w-[100px] md:h-[100px]"
                      }`}
                  />

                </div>
                <div className="ml-2 text-white">
                  <div className="lg:text-4xl text-xl  lg:leading-[33px]">
                    {product.name}
                  </div>
                  <div className="mt-2 lg:text-[24px] text-md lg:leading-[33px]">
                    {product.type}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
