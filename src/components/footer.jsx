import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import sflogo from "../assets/img/SF-img.png";
export default function Footer() {
  const services = [
    { name: "Salesforce", url: "/services/salesforce" },
    { name: "Informatica", url: "/services/informatica" },
    { name: "AI Development", url: "/services/aidevelopment" },
    { name: "Web Development", url: "/services/webdevelopment" },
    { name: "Mobile App Development", url: "/services/mobileappdevelopment" },
    { name: "Pega", url: "/services/pega" },
  ];
  const companyLinks = [
    { name: "About ", url: "/about" },
    { name: "Contact", url: "/#contact" },
  ];
  return (
    <footer className="flex flex-col w-full">
      <div className="hidden lg:block p-2 bg-[#0D0C41]"></div>
      {/* White section with logo */}
      <div className="flex bg-white py-4 gap-4 lg:gap-6 justify-center">
        <img src={logo} alt="Genufy TechWorks Logo" className="w-48 lg:w-auto h-20" />
        {/* SF-Logo */}
        <img src={sflogo} className="w-16 lg:w-[80px] h-[75px]" alt="SF-logo" />
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
                  <a href="tel:04272243334">+91427-2243334</a>,
                  <a href="tel:08110033344">+918110033344</a>
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
                  <a href="mailto:info@genufy.in">info@genufy.in</a>
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
                  <span>Salem, Tamilnadu, India</span>
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
