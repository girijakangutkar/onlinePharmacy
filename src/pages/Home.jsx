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
import ProtectedAction from "../components/ProtectedAction";
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

  return (
    <div className="flex flex-col items-center justify-center mt-[5%]">
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
              <div className="shadow-sm w-60 rounded-sm text-center p-3 m-3 font-bold text-lg">
                <img
                  src="https://img.freepik.com/free-vector/scientists-working-concept_52683-35725.jpg?uid=R204193115&ga=GA1.1.858881387.1749797072&semt=ais_hybrid&w=740"
                  className="w-90 h-40 rounded-lg object-contain"
                  alt="Lab tests"
                />
                <h2>Lab tests</h2>
              </div>
              <div className="shadow-sm w-60 rounded-sm text-center p-3 m-3 font-bold text-lg">
                <img
                  src="https://img.freepik.com/free-vector/medical-checkup-concept-illustration_114360-25989.jpg?uid=R204193115&ga=GA1.1.858881387.1749797072&semt=ais_hybrid&w=740"
                  className="w-90 h-40 rounded-lg object-contain"
                  alt="Doc Consult"
                />
                <h2>Doc Consult</h2>
              </div>
              <div className="shadow-sm w-60 rounded-sm text-center p-3 m-3 font-bold text-lg">
                <img
                  src="https://img.freepik.com/free-vector/flat-world-health-day-background_23-2149300397.jpg?uid=R204193115&ga=GA1.1.858881387.1749797072&semt=ais_hybrid&w=740"
                  className="w-90 h-40 rounded-lg object-contain"
                  alt="Health Care"
                />
                <h2>Health Care</h2>
              </div>
              <div className="shadow-sm w-60 rounded-sm text-center p-3 m-3 font-bold text-lg">
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
              <div className="shadow-sm w-60 rounded-sm text-center p-3 m-3 font-bold text-lg">
                <img
                  src="https://img.freepik.com/free-vector/tiny-pupil-standing-near-huge-gift-box-present-surprise-boy-flat-vector-illustration-birthday-holiday_74855-8634.jpg?uid=R204193115&ga=GA1.1.858881387.1749797072&semt=ais_hybrid&w=740"
                  className="w-90 h-40 rounded-lg object-contain"
                  alt="Offers"
                />
                <h2>Offers</h2>
              </div>
              <div className="shadow-sm w-60 rounded-sm text-center p-3 m-3 font-bold text-lg">
                <img
                  src="https://img.freepik.com/free-vector/homeopathy-abstract-concept-illustration_335657-5036.jpg?uid=R204193115&ga=GA1.1.858881387.1749797072&semt=ais_hybrid&w=740"
                  className="w-90 h-40 rounded-lg object-contain"
                  alt="Value store"
                />
                <h2>Value store</h2>
              </div>
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
            <div
              onClick={() => navigate("/PainCare")}
              className="flex flex-col justify-center font-bold text-xl min-w-[250px] w-[50%] mb-5"
            >
              <img
                src="https://img.freepik.com/free-vector/back-pain-concept-illustration_114360-24919.jpg?uid=R204193115&ga=GA1.1.858881387.1749797072&semt=ais_hybrid&w=740"
                className="w-90 h-50 rounded-lg object-fill"
                alt="pain care"
              />
              <h2>Pain Care</h2>
            </div>
            <div
              className="flex flex-col justify-center font-bold text-xl min-w-[250px] w-[50%] mb-5"
              onClick={() => navigate("/babyCare")}
            >
              <img
                src="https://img.freepik.com/free-vector/pediatrician-concept-illustration_114360-8935.jpg?uid=R204193115&ga=GA1.1.858881387.1749797072&semt=ais_hybrid&w=740"
                className="w-90 h-50 rounded-lg object-fill"
                alt="Baby care"
              />
              <h2>Baby care</h2>
            </div>
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
      <div className="flex flex-col sm:flex-col md-flex-row lg-flex-row xl:flex-row 2xl:flex-row 3xl:flex-row justify-center items-center self-center content-center w-[85%] m-0-auto border border-[#ccc] rounded-sm m-10">
        <div className="flex flex-row sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row bg-[#dae5ff] rounded-sm w-full sm:w-full md:w-full lg:w-full xl:w-1/2 2xl:w-1/2 3xl:w-1/2">
          <div>
            <img
              src="https://img.freepik.com/free-vector/pills-prescription-human-hands-flat-vector-illustration-patient-taking-medication-vitamins-medicine-healthcare-treatment-concept-banner-website-design-landing-web-page_74855-26092.jpg?uid=R204193115&ga=GA1.1.858881387.1749797072&semt=ais_hybrid&w=740"
              className="w-40 h-30 hidden sm:hidden md:content lg:block xl:block 2xl:block 3xl:block"
            />
          </div>
          <div className="m-5 text-md">
            <h1 className="font-semibold text-lg">Prescription us!</h1>
            <p>Upload prescription and we will deliver your medicines</p>
            {/* <ProtectedAction>
              <button
                onClick={handleUploadForm}
                className="flex flex-cols justify-center items-center m-2 ml-0 p-2 font-bold color-green rounded-md bg-green-200 shadow-sm"
              >
                <MdOutlineStart />
                &nbsp; Start Process
              </button>
            </ProtectedAction> */}
            <button
              onClick={() => requireAuth(handleUploadForm)}
              className="flex flex-cols justify-center items-center m-2 ml-0 p-2 font-bold color-green rounded-md bg-green-200 shadow-sm"
            >
              <MdOutlineStart /> &nbsp;Start Process
            </button>
          </div>
        </div>
        <div className="p-4 w-full sm:w-full md:w-full lg:w-full xl:w-1/2 2xl:w-1/2 3xl:w-1/2">
          <h2 className="font-semibold text-lg">How does this work?</h2>
          <p className="flex justify-start align-left">
            <span>
              <TbCircleNumber1 size={25} />
            </span>
            &nbsp; Click on start process
          </p>
          <p className="flex justify-start">
            <span>
              <TbCircleNumber2 size={25} />
            </span>
            &nbsp;Fill out the form with your prescription image
          </p>
          <p className="flex justify-start">
            <span>
              <TbCircleNumber3 size={25} />
            </span>
            &nbsp;Now, sit back! and wait for your medicines at your doorsteps
          </p>
        </div>
      </div>
      {/* </>
      )} */}
      {openForm && (
        <>
          <PrescriptionForm handleUploadForm={handleUploadForm} />
        </>
      )}
      {/* <div>
        <Advertise />
      </div> */}
    </div>
  );
};

export default Home;
