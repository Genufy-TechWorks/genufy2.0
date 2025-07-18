import React from "react";
import wicon from "../assets/img/whatsapp-icon.svg";
import linicon from "../assets/img/linkedin.svg";
import insticon from "../assets/img/instagram.svg";
import fbicon from "../assets/img/social-facebook-icon.svg";

const mediaList = [
  { name: "whatsapp", path: wicon, url: "https://wa.me/918110033344" },
  {
    name: "linkedin",
    path: linicon,
    url: "https://www.linkedin.com/company/genufy/",
  },
  {
    name: "instagram",
    path: insticon,
    url: "https://www.instagram.com/genufy_techworks/",
  },
  {
    name: "facebook",
    path: fbicon,
    url: "https://www.facebook.com/people/Genufy-TechWorks/61566770444657/",
  },
];

const socialMedia = () => {
  return (
    <div className="smedia-wrpr fixed flex flex-col gap-4 top-80 right-5 lg:right-10 z-11">
      {mediaList.map((item, index) => (
        <a href={item.url} key={index}>
          <img
            src={item.path}
            alt={`${item.name} icon`}
            className="w-[35px] h-[35px] md:w-auto md:h-auto"
          />
        </a>
      ))}
    </div>
  );
};

export default socialMedia;
