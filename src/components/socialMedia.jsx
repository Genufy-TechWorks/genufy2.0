import React from "react";
import wicon from "../assets/img/whatsapp-icon.svg";
import linicon from "../assets/img/linkedin.svg";
import insticon from "../assets/img/instagram.svg";
import fbicon from "../assets/img/social-facebook-icon.svg";
import twittericon from "../assets/img/twitter.png";

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
  {
    name: "twitter",
    path: twittericon,
    url: "https://x.com/GenufyTW?t=Cqluzf8etoesEbMYy9cOWQ&s=09",
  },
];

const socialMedia = () => {
  return (
    <div className="smedia-wrpr fixed flex flex-col gap-4 top-80 right-5 lg:right-10 z-11">
      {mediaList.map((item, index) => (
        <a href={item.url} key={index}>
          <div className={`${item.name === "twitter" ? "pl-1 md:pl-0" : ""}`}>
            <img
              src={item.path}
              alt={`${item.name} icon`}
              className={`object-contain ${item.name === "twitter"
                  ? "w-[35px] h-[35px] md:w-[40px] md:h-[40px]"
                  : "w-[40px] h-[40px] md:w-[45px] md:h-[45px]"
                }`}
            />
          </div>


        </a>
      ))}
    </div>
  );
};

export default socialMedia;
