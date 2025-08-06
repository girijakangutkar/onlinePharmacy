import React, { useRef, useState } from "react";
import { MdOutlineStart } from "react-icons/md";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import {
  TbCircleNumber1,
  TbCircleNumber2,
  TbCircleNumber3,
} from "react-icons/tb";
import PrescriptionForm from "../utils/PrescriptionForm";
import { useNavigate } from "react-router-dom";
import { useAuthCheck } from "../utils/authUtils";
import Advertise from "../subPages/Advertise";

const Home = () => {
  const scrollRef = useRef(null);
  const [openForm, setOpenForm] = useState(false);
  const navigate = useNavigate();
  const { requireAuth } = useAuthCheck();

  const scrollMed = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleUploadForm = () => {
    setOpenForm(!openForm);
  };

  const handleCloseForm = () => {
    setOpenForm(false);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center mt-[20%] sm:mt-[5%] lg:mt-[8%] md:mt-[10%] xl:mt-[4%] 2xl:mt-[4%]">
        <div className="w-[85%] m-0-auto flex flex-col relative">
          <div
            className="overflow-x-auto scrollbar-hide"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <div className="flex flex-col gap-10 w-max p-2">
              <div className="flex flex-row justify-center font-bold text-xl w-full">
                <div
                  onClick={() => navigate("/labTests")}
                  className="shadow-sm w-60 rounded-sm text-center p-3 m-3 font-bold text-lg"
                >
                  <img
                    src="https://img.freepik.com/free-vector/scientists-working-concept_52683-35725.jpg?uid=R204193115&ga=GA1.1.858881387.1749797072&semt=ais_hybrid&w=740"
                    className="w-90 h-40 rounded-lg object-contain"
                    alt="Lab tests"
                  />
                  <h2>Lab tests</h2>
                </div>
                <div
                  onClick={() => navigate("/consultDoctor")}
                  className="shadow-sm w-60 rounded-sm text-center p-3 m-3 font-bold text-lg"
                >
                  <img
                    src="https://img.freepik.com/free-vector/medical-checkup-concept-illustration_114360-25989.jpg?uid=R204193115&ga=GA1.1.858881387.1749797072&semt=ais_hybrid&w=740"
                    className="w-90 h-40 rounded-lg object-contain"
                    alt="Doc Consult"
                  />
                  <h2>Doc Consult</h2>
                </div>
                {/* <div className="shadow-sm w-60 rounded-sm text-center p-3 m-3 font-bold text-lg">
                <img
                  src="https://img.freepik.com/free-vector/flat-world-health-day-background_23-2149300397.jpg?uid=R204193115&ga=GA1.1.858881387.1749797072&semt=ais_hybrid&w=740"
                  className="w-90 h-40 rounded-lg object-contain"
                  alt="Health Care"
                />
                <h2>Health Care</h2>
              </div> */}
                <div
                  onClick={() => navigate("/HealthBlogs")}
                  className="shadow-sm w-60 rounded-sm text-center p-3 m-3 font-bold text-lg"
                >
                  <img
                    src="https://img.freepik.com/free-vector/doctor-using-online-app-help-patients_23-2148526220.jpg?uid=R204193115&ga=GA1.1.858881387.1749797072&semt=ais_hybrid&w=740"
                    className="w-90 h-40 rounded-lg object-contain"
                    alt="Health blogs"
                  />
                  <h2>Health blogs</h2>
                </div>
                <div className="shadow-sm w-60 rounded-sm text-center p-3 m-3 font-bold text-lg">
                  <img
                    src="https://img.freepik.com/free-vector/product-quality-concept-illustration_114360-7301.jpg?uid=R204193115&ga=GA1.1.858881387.1749797072&semt=ais_hybrid&w=740"
                    className="w-90 h-40 rounded-lg object-contain"
                    alt="Plus"
                  />
                  <h2>Plus</h2>
                </div>
                <div
                  onClick={() => navigate("/offers")}
                  className="shadow-sm w-60 rounded-sm text-center p-3 m-3 font-bold text-lg"
                >
                  <img
                    src="https://img.freepik.com/free-vector/tiny-pupil-standing-near-huge-gift-box-present-surprise-boy-flat-vector-illustration-birthday-holiday_74855-8634.jpg?uid=R204193115&ga=GA1.1.858881387.1749797072&semt=ais_hybrid&w=740"
                    className="w-90 h-40 rounded-lg object-contain"
                    alt="Offers"
                  />
                  <h2>Offers</h2>
                </div>
                {/* <div className="shadow-sm w-60 rounded-sm text-center p-3 m-3 font-bold text-lg">
                <img
                  src="https://img.freepik.com/free-vector/homeopathy-abstract-concept-illustration_335657-5036.jpg?uid=R204193115&ga=GA1.1.858881387.1749797072&semt=ais_hybrid&w=740"
                  className="w-90 h-40 rounded-lg object-contain"
                  alt="Value store"
                />
                <h2>Value store</h2>
              </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* Div2: Servicer provider div */}
        <div className="w-[100%] md:w-[85%] xl:w-[85%] m-0-auto relative">
          <h1 className="text-center font-bold text-2xl mb-4">
            Medicines by categories
          </h1>

          {/* Left scroll button */}
          <button
            onClick={() => scrollMed("left")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110 hidden sm:hidden lg:block md:block xl:block 2xl:block 3xl:block"
            style={{ marginTop: "20px" }}
          >
            <FaChevronCircleLeft size={24} className="text-gray-700" />
          </button>

          {/* Scrollable container */}
          <div
            className="scroll-wrapper overflow-x-hidden sm:overflow-x-auto md:overflow-x-auto lg:overflow-x-auto scrollbar-hide w-full"
            ref={scrollRef}
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <div className="flex flex-col justify-center items-center align-center sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row gap-1 w-max p-0 mb-3 m-0-auto">
              <div
                className="flex flex-col justify-center font-bold text-xl min-w-[250px] w-[50%] mb-5"
                onClick={() => navigate("/Medicinal")}
              >
                <img
                  src="https://img.freepik.com/free-vector/isometric-gastroenterology-composition-with-view-medication-with-tubes-pills-illustration_1284-63536.jpg?uid=R204193115&ga=GA1.1.858881387.1749797072&semt=ais_hybrid&w=740"
                  className="w-90 h-50 rounded-lg object-fill"
                  alt="Medicines"
                />
                <h2>Medicines</h2>
              </div>
              <div
                className="flex flex-col justify-center font-bold text-xl min-w-[250px] w-[50%] mb-5"
                onClick={() => navigate("/aurved")}
              >
                <img
                  src="https://img.freepik.com/free-vector/homeopathy-abstract-concept-illustration_335657-5036.jpg?uid=R204193115&ga=GA1.1.858881387.1749797072&semt=ais_hybrid&w=740"
                  className="w-90 h-50 rounded-lg object-fill"
                  alt="Aurvedic"
                />
                <h2>Aurvedic</h2>
              </div>
              <div
                className="flex flex-col font-bold text-xl min-w-[250px] w-[50%] mb-5"
                onClick={() => navigate("/vitamines")}
              >
                <img
                  src="https://img.freepik.com/free-vector/vitamins-concept-illustration_114360-26493.jpg?uid=R204193115&ga=GA1.1.858881387.1749797072&semt=ais_hybrid&w=740"
                  className="w-90 h-50 rounded-lg object-fill"
                  alt="Vitamins"
                />
                <h2>Vitamins</h2>
              </div>
              <div
                className="flex flex-col justify-center font-bold text-xl min-w-[250px] w-[50%] mb-5"
                onClick={() => navigate("/diabetes")}
              >
                <img
                  src="https://img.freepik.com/free-vector/isometric-diabetes-composition-with-text-human-character-with-thought-bubbles-life-situations-insulin-syringe-vector-illustration_1284-79633.jpg?uid=R204193115&ga=GA1.1.858881387.1749797072&semt=ais_hybrid&w=740"
                  className="w-90 h-50 rounded-lg object-fill"
                  alt="Diabetes"
                />
                <h2>Diabetes</h2>
              </div>
              <div
                className="flex flex-col justify-center font-bold text-xl min-w-[250px] w-[50%] mb-5"
                onClick={() => navigate("/PersonalCare")}
              >
                <img
                  src="https://img.freepik.com/free-vector/parents-kid-visiting-pediatrician_74855-10976.jpg?uid=R204193115&ga=GA1.1.858881387.1749797072&semt=ais_hybrid&w=740"
                  className="w-90 h-50 rounded-lg object-fill"
                  alt="Personal care"
                />
                <h2>Personal care</h2>
              </div>
              {/* <div className="flex flex-col justify-center font-bold text-xl min-w-[250px] w-[50%] mb-5">
              <img
                src="https://img.freepik.com/free-vector/hand-drawn-patient-taking-medical-examination_23-2148843031.jpg?uid=R204193115&ga=GA1.1.858881387.1749797072&semt=ais_hybrid&w=740"
                className="w-90 h-50 rounded-lg object-fill"
                alt="Woman care"
              />
              <h2>Woman care</h2>
            </div> */}
              <div
                className="flex flex-col justify-center font-bold text-xl min-w-[250px] w-[50%] mb-5"
                onClick={() => navigate("/heathCare")}
              >
                <img
                  src="https://img.freepik.com/free-vector/cardiologist-concept-illustration_114360-6847.jpg?uid=R204193115&ga=GA1.1.858881387.1749797072&semt=ais_hybrid&w=740"
                  className="w-90 h-50 rounded-lg object-fill"
                  alt="Health care"
                />
                <h2>Health care</h2>
              </div>
              {/* <div
                onClick={() => navigate("/PainCare")}
                className="flex flex-col justify-center font-bold text-xl min-w-[250px] w-[50%] mb-5"
              >
                <img
                  src="https://img.freepik.com/free-vector/back-pain-concept-illustration_114360-24919.jpg?uid=R204193115&ga=GA1.1.858881387.1749797072&semt=ais_hybrid&w=740"
                  className="w-90 h-50 rounded-lg object-fill"
                  alt="pain care"
                />
                <h2>Pain Care</h2>
              </div> */}
              {/* <div
                className="flex flex-col justify-center font-bold text-xl min-w-[250px] w-[50%] mb-5"
                onClick={() => navigate("/babyCare")}
              >
                <img
                  src="https://img.freepik.com/free-vector/pediatrician-concept-illustration_114360-8935.jpg?uid=R204193115&ga=GA1.1.858881387.1749797072&semt=ais_hybrid&w=740"
                  className="w-90 h-50 rounded-lg object-fill"
                  alt="Baby care"
                />
                <h2>Baby care</h2>
              </div> */}
            </div>
          </div>

          {/* Right scroll button */}
          <button
            onClick={() => scrollMed("right")}
            className="hidden sm:hidden lg:block md:block xl:block 2xl:block 3xl:block absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
            style={{ marginTop: "20px" }}
          >
            <FaChevronCircleRight size={24} className="text-gray-700" />
          </button>
        </div>
        {/*Div3: Prescription upload div */}
        <div className="bg-gray-50">
          <div className="container mx-auto px-4">
            {/* Your existing home content */}
            <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row justify-center items-center self-center content-center w-[85%] mx-auto border border-gray-300 rounded-lg shadow-lg m-10 overflow-hidden">
              <div className="flex flex-row sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row bg-gradient-to-br from-blue-50 to-indigo-50 rounded-l-lg w-full sm:w-full md:w-full lg:w-full xl:w-1/2 2xl:w-1/2 3xl:w-1/2">
                <div className="flex-shrink-0">
                  <img
                    src="https://img.freepik.com/free-vector/pills-prescription-human-hands-flat-vector-illustration-patient-taking-medication-vitamins-medicine-healthcare-treatment-concept-banner-website-design-landing-web-page_74855-26092.jpg?uid=R204193115&ga=GA1.1.858881387.1749797072&semt=ais_hybrid&w=740"
                    className="w-40 h-30 hidden sm:hidden md:hidden lg:block xl:block 2xl:block 3xl:block object-cover rounded-lg m-4"
                    alt="Prescription"
                  />
                </div>
                <div className="m-5 text-md flex-1">
                  <h1 className="font-bold text-xl text-gray-800 mb-2">
                    Prescription Upload Service
                  </h1>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Upload your prescription and we'll deliver your medicines
                    right to your doorstep
                  </p>
                  <button
                    onClick={() => requireAuth(handleUploadForm)}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  >
                    <MdOutlineStart className="text-lg" />
                    Start Process
                  </button>
                </div>
              </div>

              <div className="p-6 w-full sm:w-full md:w-full lg:w-full xl:w-1/2 2xl:w-1/2 3xl:w-1/2 bg-white">
                <h2 className="font-bold text-xl text-gray-800 mb-4">
                  How does this work?
                </h2>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                    <TbCircleNumber1
                      size={24}
                      className="text-blue-600 flex-shrink-0 mt-0.5"
                    />
                    <p className="text-gray-700 font-medium">
                      Click on "Start Process" button
                    </p>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                    <TbCircleNumber2
                      size={24}
                      className="text-purple-600 flex-shrink-0 mt-0.5"
                    />
                    <p className="text-gray-700 font-medium">
                      Fill out the form with your prescription image
                    </p>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                    <TbCircleNumber3
                      size={24}
                      className="text-green-600 flex-shrink-0 mt-0.5"
                    />
                    <p className="text-gray-700 font-medium">
                      Sit back and wait for your medicines at your doorstep
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <PrescriptionForm isOpen={openForm} onClose={handleCloseForm} />
      </div>

      <h2 className="text-center text-xl mb-4">Advertisement</h2>
      <div className="m-0-auto 1-[85%] pl-[10%] pr-[10%] mb-10">
        <Advertise />
      </div>
    </>
  );
};

export default Home;
