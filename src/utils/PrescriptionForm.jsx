"use client";

import { useState, useRef, useEffect } from "react";
import { GrAttachment } from "react-icons/gr";
import { CgCloseO } from "react-icons/cg";
import axios from "axios";

const PrescriptionForm = ({ isOpen, onClose }) => {
  const [fileName, setFileName] = useState("");
  const inputRef = useRef(null);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const modalRef = useRef(null);

  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Handle click outside modal
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleUpload = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await axios.post(import.meta.env.VITE_REALDB, {
        name,
        address,
        number,
        fileName,
      });
      console.log(res.data);
      alert("Submitted successfully!");
      onClose();
    } catch (error) {
      console.log("Something went wrong:", error);
      alert("Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
      setName("");
      setAddress("");
      setNumber("");
      setFileName("");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-1000 flex items-start justify-center pt-8 px-4">
      {/* Backdrop with blur effect */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300" />

      {/* Modal Container */}
      <div
        ref={modalRef}
        className="h-[90%] hide-scrollbar overflow-auto relative w-full max-w-md mx-auto bg-white rounded-2xl shadow-2xl transform transition-all duration-300 scale-100 animate-in slide-in-from-top-4"
        style={{
          animation: "modalSlideIn 0.3s ease-out forwards",
        }}
      >
        {/* Gradient Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-t-2xl">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-white">
                Upload Prescription
              </h2>
              <p className="text-blue-100 text-sm mt-1">
                Quick & Easy Medicine Delivery
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white hover:bg-white/20 rounded-full p-2 transition-all duration-200"
            >
              <CgCloseO size={24} />
            </button>
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6 h-full">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Field */}
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-300"
                placeholder="Enter your full name"
                required
                disabled={isSubmitting}
              />
            </div>

            {/* Address Field */}
            <div className="space-y-2">
              <label
                htmlFor="address"
                className="block text-sm font-semibold text-gray-700"
              >
                Delivery Address *
              </label>
              <textarea
                id="address"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                rows={3}
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-200 hover:border-gray-300"
                placeholder="Enter your complete delivery address"
                required
                disabled={isSubmitting}
              />
            </div>

            {/* Phone Number Field */}
            <div className="space-y-2">
              <label
                htmlFor="number"
                className="block text-sm font-semibold text-gray-700"
              >
                Phone Number *
              </label>
              <input
                type="tel"
                id="number"
                name="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-300"
                placeholder="Enter your phone number"
                required
                disabled={isSubmitting}
              />
            </div>

            {/* File Upload */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Prescription Image *
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-400 hover:bg-blue-50/50 transition-all duration-200 cursor-pointer group">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleUpload}
                  ref={inputRef}
                  className="hidden"
                  required
                  disabled={isSubmitting}
                />

                <div className="space-y-3">
                  {fileName ? (
                    <div className="text-sm text-green-600 font-medium bg-green-50 px-3 py-2 rounded-lg inline-block">
                      ✓ {fileName}
                    </div>
                  ) : (
                    <div className="text-sm text-gray-500">
                      No file selected
                    </div>
                  )}

                  <button
                    onClick={() => inputRef.current?.click()}
                    type="button"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 shadow-lg hover:shadow-xl transform hover:scale-105"
                    disabled={isSubmitting}
                  >
                    <GrAttachment className="mr-2" />
                    Choose Prescription Image
                  </button>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 px-6 rounded-xl hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 disabled:transform-none"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Submitting...</span>
                </div>
              ) : (
                "Submit Prescription"
              )}
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="px-6 pb-6">
          <p className="text-xs text-gray-500 text-center">
            Your prescription will be verified by our licensed pharmacists
            before delivery
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrescriptionForm;
