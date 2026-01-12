import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setStatus("Sending...");

    try {
      const response = await fetch("https://bibek-portfolio-server.vercel.app/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("Email sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        setStatus("Failed to send email. Try again later.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("Error sending email.");
    }
  };

  return (
    <div className="mt-8">
      <div>
        <h2 className="text-4xl lg:text-6xl font-bold text-white text-center">
          About <span className="text-purple-400">Me</span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto text-center">
          As a junior web developer, my journey has been filled with challenges and growth...
        </p>
      </div>
      <div className=" flex justify-center items-center text-white px-4 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-2 rounded-lg max-w-6xl w-full">
          
          <div className="bg-white/10 backdrop-blur-md border border-white/10 shadow-xl p-4 md:p-8 rounded-3xl">
            <h2 className="text-4xl font-bold text-purple-400">Let’s work together!</h2>
            <p className="text-gray-400 mt-2">
              I design and code beautifully simple things, and I love what I do.
            </p>

            <form className="mt-6 space-y-4 " onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First name" required className="w-full p-3 bg-black/50   border border-gray-700 rounded-md  focus:outline-none focus:ring-2 focus:ring-purple-500" />
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last name" required className="w-full p-3 bg-black/50 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email address" required className="w-full p-3 bg-black/50 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500" />
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone number" required className="w-full p-3 bg-black/50 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500" />
              </div>

              <select name="service" value={formData.service} onChange={handleChange} required className="w-full p-3 bg-black/50 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option value="">Select an option</option>
                <option value="Front End Development">Front End Development</option>
                <option value="Back End Development">Back End Development</option>
                <option value="Full Stack Development">Full Stack Development</option>
              </select>

              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" required className="w-full p-3 bg-black/50 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500 h-32"></textarea>

              <button type="submit" className="cursor-pointer bg-gradient-to-r from-purple-500 to-purple-700 text-white py-3 px-6 rounded-lg font-bold hover:opacity-80 transition duration-300 w-full">
                Send Message
              </button>

              {status && <p className="text-green-500 text-2xl mt-2">{status}</p>}
            </form>
          </div>

          {/* Right Side - Contact Info */}

          <div className="flex flex-col space-y-6 mt-10 lg:mt-36">
          <div className="flex items-center space-x-4">
            <div className="bg-purple-600 p-3 rounded-full">
              <FaPhoneAlt className="text-white text-xl" />
            </div>
            <div>
              <p className="text-gray-400">Phone/WhatsApp</p>
              <p className="text-lg font-semibold">+8801776569120</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-purple-600 p-3 rounded-full">
              <FaEnvelope className="text-white text-xl" />
            </div>
            <div>
              <p className="text-gray-400">Email</p>
              <p className="text-lg font-semibold">bibektotol@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-purple-600 p-3 rounded-full">
              <FaMapMarkerAlt className="text-white text-xl" />
            </div>
            <div>
              <p className="text-gray-400">Address</p>
              <p className="text-lg font-semibold">
              Dhaka, Bangladesh
              </p>
            </div>
          </div>
        </div>
          
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
