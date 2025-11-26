import { useState, useEffect } from "react";
import mailIcon from "../assets/img/common-arrow.png";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    phone: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const [status, setStatus] = useState({
    show: false,
    type: "success",
    message: "Thank you for contacting us! We'll get back to you shortly.",
  });

  // Check if all fields are filled and valid
  useEffect(() => {
    const { firstName, lastName, email, phone, message } = formData;

    setIsFormValid(
      firstName.trim() !== "" &&
        lastName.trim() !== "" &&
        email.trim() !== "" &&
        validateEmail(email) &&
        phone.trim() !== "" &&
        validatePhone(phone) &&
        message.trim() !== ""
    );
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const numericValue = value.replace(/\D/g, "");
      if (numericValue.length <= 10) {
        setFormData((prev) => ({
          ...prev,
          [name]: numericValue,
        }));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleEmail = () => {
  const email = formData.email.trim();

  const isEmailValid =
    email === "" || (email.length >= 3 && validateEmail(email));

  setErrors((prev) => ({
    ...prev,
    email:
      !isEmailValid && email !== ""
        ? email.length < 3
          ? "Email must be at least 3 characters long"
          : "Please enter a valid email address"
        : "",
  }));
};


  const handlePhone = () => {
    const phone = formData.phone;
    const isPhoneValid = phone.trim() === "" || validatePhone(phone);
    setErrors((prev) => ({
      ...prev,
      phone:
        !isPhoneValid && phone.trim() !== ""
          ? "Please enter a valid 10-digit phone number"
          : "",
    }));
  };

  const disableAlert = () => {
    setStatus({
      show: false,
      type: "success",
      message: "Thank you for contacting us! We'll get back to you shortly.",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newformData = new FormData();

    for (const key in formData) {
      newformData.append(key, formData[key]);
    }
    console.log("Form submitted:", newformData);
    newformData.append("access_key", "1ca5ca3a-21d9-465e-9684-858149bffbf1");
    // Handle form submission logic here
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: newformData,
    });

    const data = await response.json();

    if (data.success) {
      setStatus({
        show: true,
        type: "success",
        message: "Thank you for contacting us! We'll get back to you shortly.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
      setTimeout(() => {
        disableAlert();
      }, 5000);
    } else {
      console.log("Error", data);
      setStatus({
        show: true,
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
      setTimeout(() => {
        disableAlert();
      }, 5000);
    }
  };

  return (
    <div className="flex items-center justify-center px-4 mt-8 pb-4 lg:pb-6 lg:p-4 lg:px-40">
      <div className="w-full p-6 lg:p-12 lg:px-20 pb-0 bg-white rounded-lg border border-black shadow-sm overflow-hidden">
        <div className="flex flex-col gap-6">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-500 mb-1"
              >
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-3 py-2 border-b border-gray-300 focus:border-black outline-none transition-colors"
                placeholder="Enter your first name.."
                required
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-500 mb-1"
              >
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-3 py-2 border-b border-gray-300 focus:border-black outline-none transition-colors"
                placeholder="Enter your last name.."
                required
              />
            </div>
          </div>

          {/* Email and Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-500 mb-1"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleEmail}
                className={`w-full px-3 py-2 border-b ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } focus:border-black outline-none transition-colors`}
                placeholder="Enter your email.."
                required
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-500 mb-1"
              >
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handlePhone}
                className={`w-full px-3 py-2 border-b ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                } focus:border-black outline-none transition-colors`}
                placeholder="Enter your phone number.."
                required
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-500 mb-1"
            >
              Message *
            </label>
            <input
              type="text"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border-b border-gray-300 focus:border-black outline-none transition-colors"
              placeholder="Write your message.."
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-6">
            <button
              onClick={handleSubmit}
              disabled={!isFormValid}
              className={`px-8 py-3 font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors ${
                isFormValid
                  ? "bg-[#0D0C41] text-white hover:bg-black"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              <span className="flex items-center font-bold">Send Message</span>
            </button>
          </div>
          <div className="flex justify-center -mt-4">
            <img src={mailIcon} alt="mail-icon" className="w-48 mr-8" />
          </div>
          {status.show && (
            <div
              className={`fixed top-10 left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-[90vw] md:w-[500px] z-[10000] p-4 rounded-lg border-l-4 shadow-sm transition-all duration-300 ${
                status.type === "success"
                  ? "bg-green-50 border-green-400 text-green-800"
                  : "bg-red-50 border-red-400 text-red-800"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div>
                    <p className="text-sm mt-1">{status.message}</p>
                  </div>
                </div>
                <button
                  onClick={disableAlert}
                  className={`p-1 rounded-full hover:bg-opacity-20 transition-colors cursor-pointer`}
                >
                  X
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
