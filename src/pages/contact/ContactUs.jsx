import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import contact from '../../assets/team/contact.jpg'
const ContactForm = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'ubisoft123',      // ✅ Replace with your actual service ID
        'template_9u0sifr',     // ✅ Replace with your actual template ID
        e.target,
        'FkHIqvUFhSSwWl0jG'     // ✅ Replace with your public key
      )
      .then(() => {
        setShowPopup(true);
        e.target.reset();
        setTimeout(() => setShowPopup(false), 3000);
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        alert('Failed to send message. Please try again.');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <section className="py-24 font-['Roboto Condensed']">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 grid-cols-1">
            {/* Left Side */}
            <div className="lg:mb-0 mb-10">
              <div className="group w-full h-full">
                <div className="relative h-full">
                  <img
                    src={contact}
                    alt="ContactUs"
                    className="w-full h-full lg:rounded-l-2xl rounded-2xl object-cover"
                  />
                  <h1 className="text-white text-4xl font-bold absolute top-11 left-11">
                    Contact us
                  </h1>
                  <div className="absolute bottom-0 w-full lg:p-11 p-5">
                    <div className="bg-white rounded-lg p-6 block">
                      <a href="tel:+923076633037" className="flex items-center mb-6">
                        📞
                        <h5 className="text-black text-base font-normal leading-6 ml-5">+92 307 6633037</h5>
                      </a>
                      <a href="mailto:your@email.com" className="flex items-center mb-6">
                        📧
                        <h5 className="text-black text-base font-normal leading-6 ml-5">contact@ubisoftpvtltd.com</h5>
                      </a>
                      <a href="#" className="flex items-center">
                        📍
                        <h5 className="text-black text-base font-normal leading-6 ml-5">
                          UBI Soft Pvt Ltd, Bahawalpur, Pakistan, 63100
                        </h5>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
              <h2 className="text-red-600 text-4xl font-semibold leading-10 mb-11 font-roboto">
                Send Us A Message
              </h2>

              <input
                type="text"
                name="name"
                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-6"
                placeholder="Name"
                required
              />
              <input
                type="email"
                name="email"
                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-6"
                placeholder="Email"
                required
              />
              <input
                type="text"
                name="phone"
                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-6"
                placeholder="Phone"
              />
              <textarea
                name="message"
                rows="4"
                className="w-full text-gray-600 placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal leading-7 rounded-xl border border-gray-200 focus:outline-none p-4 mb-6"
                placeholder="Message"
                required
              />

              <button
                type="submit"
                className="w-full h-12 font-roboto text-white text-base font-semibold leading-6 rounded-full transition-all duration-700 hover:bg-indigo-800 bg-red-600 shadow-sm"
              >
                Send
              </button>

              {showPopup && (
                <div className="mt-6 bg-green-100 border border-green-300 text-green-800 px-4 py-3 rounded text-center transition-all duration-500">
                  ✅ Your message has been sent!
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </form>
  );
};

export default ContactForm;
