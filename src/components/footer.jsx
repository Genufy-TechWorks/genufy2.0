// import { Link } from "react-router-dom";
// import { useState } from "react";
// import logo from "../assets/img/logo.png";
// import sflogo from "../assets/img/SF-img.png";

// export default function Footer() {
//   const services = [
//     { name: "Salesforce", url: "/services/salesforce" },
//     { name: "Informatica", url: "/services/informatica" },
//     { name: "AI Solutions", url: "/services/aisolutions" },
//     { name: "Web Development", url: "/services/webdevelopment" },
//     { name: "Mobile App Development", url: "/services/mobileappdevelopment" },
//     { name: "Pega", url: "/services/pega" },
//   ];

//   const companyLinks = [
//     { name: "About ", url: "/about" },
//     { name: "Contact", url: "/#contact" },
//     { name: "Blog", url: "/blog" },
//   ];

//   const locations = {
//     salem:
//       "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.507421872643!2d78.14511627510904!3d11.664325188544136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1f5a1f3c0a1%3A0xf9e84d0c1ff3c3f!2sSalem%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1747121131601!5m2!1sen!2sin",
//     coimbatore:
//       "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.6251959818897!2d76.95583257499696!3d11.016844192158878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8576a5b18f0a9%3A0xc52c4ec814f8cf88!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1747121131601!5m2!1sen!2sin",
//     usa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.701043569332!2d-74.42810418459597!3d40.85775537931648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c307a0566a7a9f%3A0xf6bca30248d1b8a1!2sParsippany%2C%20NJ%2007054%2C%20USA!5e0!3m2!1sen!2sin!4v1747121131601!5m2!1sen!2sin",
//   };

//   const [activeMap, setActiveMap] = useState("salem");

//   return (
//     <footer className="flex flex-col w-full">
//       <div className="lg:block p-2 bg-[#0D0C41]"></div>
//       {/* White section with logo */}
//       <div className="flex bg-white py-4 gap-4 lg:gap-6 justify-center">
//         {/* <img src={logo} alt="Genufy TechWorks Logo" className="w-48 lg:w-auto h-20" /> */}
//         <a href="http://localhost:5173/"><img src={logo} className="w-[200px]" alt="Genufy TechWorks logo" /></a>
//         {/* SF-Logo */}
//         {/* <img src={sflogo} className="w-16 lg:w-[80px] h-[75px]" alt="SF-logo" /> */}
//         <img src={sflogo} className="w-[60px]" alt="SF-logo" />
//       </div>


//       {/* Divider */}
//       <div className="w-full h-px bg-gray-200"></div>

//       {/* Dark blue footer content */}
//       <div className="text-white py-12 bg-[#0D0C41]">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col lg:flex-row justify-evenly">
//             {/* Contact Information */}
//             <div className="mb-8 lg:mb-0">
//               <h3 className="text-xl font-semibold mb-6">Reach us</h3>
//               <div className="space-y-4">
//                 <div className="flex items-center">
//                   <div className="w-6 h-6 mr-3 flex items-center justify-center">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="20"
//                       height="20"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     >
//                       <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
//                     </svg>
//                   </div>
//                   <div className="text-sm">
//                     <a href="tel:04272243334">+91 427-2243334</a>,
//                     <br />
//                     <a href="tel:08110033344">+91 81100 33344</a>
//                   </div>
//                 </div>

//                 <div className="flex items-center">
//                   <div className="w-6 h-6 mr-3 flex items-center justify-center">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="20"
//                       height="20"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     >
//                       <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
//                       <polyline points="22,6 12,13 2,6"></polyline>
//                     </svg>
//                   </div>
//                   <div className="text-sm">
//                     <a href="mailto:info@genufy.in">info@genufy.in</a>
//                     <br />
//                     <a href="mailto:career@genufy.in">career@genufy.in</a>
//                   </div>
//                 </div>
//                 <div className="flex items-center">
//                   <div className="w-6 h-6 mr-3 flex items-center justify-center">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="20"
//                       height="20"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     >
//                       <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
//                       <circle cx="12" cy="10" r="3"></circle>
//                     </svg>
//                   </div>
//                   <div className="text-sm">
//                   <span>Salem, Tamilnadu, India</span>
//                   <br />
//                   <span>Coimbatore, Tamilnadu, India</span>
//                   <br />
//                   <span>Parsippany, NJ 07054, US</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Company Links */}
//             <div className="mb-8 lg:mb-0">
//               <h3 className="text-xl font-semibold mb-6">Company</h3>
//               <ul className="space-y-3 text-sm">
//                 {companyLinks.map((item, index) => (
//                   <li key={index}>
//                     <Link
//                       to={item.url}
//                       className="transition duration-200 hover:text-blue-300"
//                       onClick={() => {
//                         if (item.url === "/#contact") {
//                           setTimeout(() => {
//                             const element = document.getElementById("contact");
//                             if (element) {
//                               element.scrollIntoView({ behavior: "smooth" });
//                             }
//                           }, 100);
//                         }
//                       }}
//                     >
//                       {item.name}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Services */}
//             <div className="mb-8 lg:mb-0 lg:ml-20">
//               <h3 className="text-xl font-semibold mb-6">Services</h3>
//               <ul className="space-y-3 text-sm">
//                 {services.map((item, index) => (
//                   <li key={index}>
//                     <Link
//                       to={item.url}
//                       className="transition duration-200 hover:text-blue-300"
//                     >
//                       {item.name}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Map */}
//             <div className="text-left lg:text-center">
//               <h3 className="text-xl font-semibold mb-6">
//                 Explore Our Locations
//               </h3>
//               <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center lg:mr-4">
//                 <div className="flex flex-col gap-2 text-sm">
//                  <button
//                  onClick={() => setActiveMap("salem")}
//                  className={`transition duration-200 text-left lg:text-right ${
//                   activeMap === "salem" ? "bg-gradient-to-r from-[#85E669] to-[#2CBDA7] bg-clip-text text-transparent font-semibold" : "hover:text-blue-300"
//                  }`}
//                  >
//                   Salem
//                  </button>
//                  <button
//                  onClick={() => setActiveMap("coimbatore")}
//                  className={`transition duration-200 text-left lg:text-right ${
//                   activeMap === "coimbatore" ? "bg-gradient-to-r from-[#85E669] to-[#2CBDA7] bg-clip-text text-transparent font-semibold" : "hover:text-blue-300"
//                  }`}
//                  >
//                   Coimbatore
//                  </button>
//                  <button
//                  onClick={() => setActiveMap("usa")}
//                  className={`transition duration-200 text-left lg:text-right ${
//                   activeMap === "usa" ? "bg-gradient-to-r from-[#85E669] to-[#2CBDA7] bg-clip-text text-transparent font-semibold" : "hover:text-blue-300"
//                  }`}
//                  >
//                   Parsippany
//                  </button>
//                 </div>
//                 <div className="w-[250px] h-[150px] lg:w-[200px] lg:h-[150px] rounded-lg overflow-hidden">
//                   <iframe
//                     src={locations[activeMap]}
//                     className="w-full h-full border-0"
//                     allowFullScreen=""
//                     loading="lazy"
//                     referrerPolicy="no-referrer-when-downgrade"
//                   ></iframe>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Copyright */}
//       <div className="py-4 text-center border-t border-gray-700">
//         <div className="container mx-auto px-4">
//           <p>© 2025 <a href="http://localhost:5173/">Genufy TechWorks.</a> All rights reserved</p>
//         </div>
//       </div>
//     </footer>
//   );
// }

import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import sflogo from "../assets/img/SF-img.png";
export default function Footer() {
  const services = [
    { name: "Salesforce", url: "/services/salesforce" },
    { name: "Informatica", url: "/services/informatica" },
    { name: "AI Solutions", url: "/services/aisolutions" },
    { name: "Web Development", url: "/services/webdevelopment" },
    { name: "Mobile App Development", url: "/services/mobileappdevelopment" },
    { name: "Snowflake", url: "/services/snowflake" },
    { name: "Pega", url: "/services/pega" },
    { name: "Snowflake", url: "/services/snowflake" },
  ];
  const companyLinks = [
    { name: "About ", url: "/about" },
    { name: "Contact", url: "/#contact" },
  ];
  return (
    <footer className="flex flex-col w-full">
      <div className="lg:block p-2 bg-[#0D0C41]"></div>
      {/* White section with logo */}
      
      <div className="flex bg-white py-4 gap-4 lg:gap-6 justify-center">
      <a href="/"><img src={logo} className="w-[200px]" alt="Genufy TechWorks logo" /></a>
              {/* SF-Logo */}
      <img src={sflogo} className="w-[60px]" alt="SF-logo" />
      </div>


      {/* Divider */}
      <div className="w-full h-px bg-gray-200"></div>

      {/* Dark blue footer content */}
      <div className="text-white py-12 bg-[#0D0C41]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between">
            {/* Contact Information */}
            <div className="mb-8 lg:mb-0">
              <h3 className="text-xl font-semibold mb-6">Reach us</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-6 h-6 mr-3 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div className="text-sm">
                     <a href="tel:04272243334">+91 427-2243334</a>,
                     <br />
                     <a href="tel:08110033344">+91 81100 33344</a>
                   </div>
                </div>

                <div className="flex items-center">
                  <div className="w-6 h-6 mr-3 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div className="text-sm">
                     <a href="mailto:info@genufy.in">info@genufy.in</a>
                     <br />
                     <a href="mailto:career@genufy.in">career@genufy.in</a>
                   </div>
                </div>

                <div className="flex items-center">
                  <div className="w-6 h-6 mr-3 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div className="text-sm">
                   <span>Salem, Tamilnadu, India</span>
                   <br />
                   <span>Coimbatore, Tamilnadu, India</span>
                   <br />
                   <span>Parsippany, NJ 07054, US</span>
                   </div>
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div className="mb-8 lg:mb-0">
              <h3 className="text-xl font-semibold mb-6">Company</h3>
              <ul className="space-y-3">
                {companyLinks.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.url}
                      className="hover:text-blue-300 transition duration-200"
                      onClick={() => {
                        if (item.url === "/#contact") {
                          setTimeout(() => {
                            const element = document.getElementById("contact");
                            if (element) {
                              element.scrollIntoView({ behavior: "smooth" });
                            }
                          }, 100);
                        }
                      }}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="mb-8 lg:mb-0">
              <h3 className="text-xl font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                {services.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.url}
                      className="hover:text-blue-300 transition duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Map */}
            <div className="text-left lg:text-center">
              <h3 className="text-xl font-semibold mb-6">
                Explore Our Locations
              </h3>
              <div className="w-full lg:w-80 lg:w-100 h-48 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.4743130114016!2d78.3299077751132!3d11.660759688546976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bab8d006ddef20f%3A0x7c25ac6b3ab57091!2sGenufy%20TechWorks!5e0!3m2!1sen!2sin!4v1747121131601!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-4 text-center border-t border-gray-700">
        <div className="container mx-auto px-4">
          <p>© 2025 Genufy TechWorks. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
