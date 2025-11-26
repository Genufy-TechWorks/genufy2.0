import sflogo from "../assets/img/SF-img.png";
import sfBgImg from "../assets/img/Sf-bg-img.jpg";

function SfpartnerOff() {
  return (
    <div
      className="bg-no-repeat p-6 md:p-[20px_120px] bg-[position:left_-45px_bottom] bg-[length:unset] shadow-[0_0_5px_5px_rgba(141,141,141,0.41)] rounded-[6px] mt-10 md:mt-[80px] mb-[50px] md:bg-[position:center] md:bg-cover"
      style={{ backgroundImage: `url(${sfBgImg})` }}
    >
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-[50px] p-6 md:p-[30px_40px]">
        <div className="hidden md:block">
          <img
            src={sflogo}
            className="w-[100px] md:w-[180px] rounded-[10px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
            alt="sf-logo"
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-xl md:text-[30px] font-bold leading-loose md:leading-[2.5]">
            We are an official{" "}
            <span className="text-[#00A1E0] text-nowrap">
              Salesforce partner.
            </span>
          </h1>
          <p className="font-medium text-lg text-[#0d0c41] leading-loose md:leading-[2.5] mt-3 md:mt-0">
            We empower businesses with smarter, faster, and connected <br />
            solutions through the Salesforce ecosystem.
          </p>
        </div>
        <div className="block md:hidden">
          <img
            src={sflogo}
            className="w-[100px] md:w-[150px] rounded-[10px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
            alt="sf-logo"
          />
        </div>
      </div>
    </div>
  );
}

export default SfpartnerOff;
