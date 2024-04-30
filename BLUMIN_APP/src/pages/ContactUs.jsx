import React, { useState } from "react";

const ContactUs = () => {
  const [showInfo, setShowInfo] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const closeContainer = () => {
    setShowInfo(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", formData);
      setFormData({
        name: "",
        email: "",
        organization: "",
        phone: "",
        message: "",
      });
    }
  };

  const validateForm = (data) => {
    const newErrors = {};
    if (!data.name.trim()) {
      newErrors.name = "Name is required";
    } else if (data.name.trim().length < 2) {
      newErrors.name = "Name should be at least 2 characters";
    }
    if (!data.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(data.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!data.organization.trim()) {
      newErrors.organization = "Organization is required";
    }
    if (!data.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    if (!data.message.trim()) {
      newErrors.message = "Message is required";
    }
    return newErrors;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <>
      <section className="text-gray-600 body-font py-10 mt-20">
        <div className="container px-5 mx-auto">
          <h1 className="text-6xl font-medium title-font text-gray-900 mb-12 text-center">
            CONTACT US
          </h1>
        </div>
      </section>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1345.8059479110234!2d78.3682123165372!3d17.43509356232149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93ee5d7b921f%3A0x9e636e8266c370b0!2sJyothi%20Imperial%2C%20Janardana%20Hills%2C%20Lumbini%20Avenue%2C%20Gachibowli%2C%20Hyderabad%2C%20Telangana%20500081!5e0!3m2!1sen!2sin!4v1713035324548!5m2!1sen!2sin"
              style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
            ></iframe>

            {showInfo && (
              <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    ADDRESS
                  </h2>
                  <p className="mt-1">
                    Fourth floor, Syncor Solutions, Jyothi Imperial, Gachibowli,
                    Hyderabad.
                  </p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    EMAIL
                  </h2>
                  <a
                    href="mailto:example@email.com"
                    className="text-indigo-500 leading-relaxed"
                  >
                    example@email.com
                  </a>
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                    PHONE
                  </h2>
                  <p className="leading-relaxed">123-456-7890</p>
                </div>
                <button
                  className="absolute top-0 right-0 mr-4 mt-4 text-gray-600"
                  onClick={closeContainer}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:px-8 md:py-8 mt-8 md:mt-0 rounded-2xl">
            <p className="leading-relaxed mb-5 text-gray-600">
              We are here to answer any questions you may have about our
              services, collaborations, or partnerships. Reach out to us via the
              contact form below or directly through our contact details. We
              look forward to hearing from you
            </p>
            <form onSubmit={handleSubmit}>
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-white rounded border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                />
                {errors.name && (
                  <span className="text-red-500 text-xs mt-1">
                    {errors.name}
                  </span>
                )}
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-white rounded border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                />
                {errors.email && (
                  <span className="text-red-500 text-xs mt-1">
                    {errors.email}
                  </span>
                )}
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="organization"
                  className="leading-7 text-sm text-gray-600"
                >
                  Organization*
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className={`w-full bg-white rounded border ${
                    errors.organization ? "border-red-500" : "border-gray-300"
                  } focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                />
                {errors.organization && (
                  <span className="text-red-500 text-xs mt-1">
                    {errors.organization}
                  </span>
                )}
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="phone"
                  className="leading-7 text-sm text-gray-600"
                >
                  Phone*
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full bg-white rounded border ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  } focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                />
                {errors.phone && (
                  <span className="text-red-500 text-xs mt-1">
                    {errors.phone}
                  </span>
                )}
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message*
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full bg-white rounded border ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  } focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out`}
                ></textarea>
                {errors.message && (
                  <span className="text-red-500 text-xs mt-1">
                    {errors.message}
                  </span>
                )}
              </div>
              <button
                type="submit"
                className="text-white bg-[#001b71] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Send Message
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-3"></p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
