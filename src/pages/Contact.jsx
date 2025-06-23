import { message } from "antd";
import React, { useState } from "react";
import axios from "axios";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Form submitted:", formData);
    setLoading(true);
    try {
      const res = await axios.post(import.meta.env.VITE_REALDB, {
        formData,
      });
      console.log(res.data);
      alert("Submitted");
    } catch (error) {
      console.log("Something went wrong:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 mt-[10%] xl:mt-[5%] 2xl:mt-[5%]">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          className="w-full resize-none p-2 border border-gray-300 rounded"
          required
        />
        <button
          type="submit"
          className="bg-[#b82a29] text-white px-4 py-2 rounded hover:bg-green-700"
        >
          {loading ? "Loading..." : " Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
