import React, { useRef } from "react";
import { GrAttachment } from "react-icons/gr";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

const Home = () => {
  const scrollRef = useRef(null);

  const scrollMed = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {/* health care features div */}
      <div className="flex flex-row justify-center items-center w-[90%] gap-4 p-10">
        <div className="shadow-lg align-center w-xl rounded-sm text-center p-3 font-bold text-lg">
          <img
            src="https://img.freepik.com/free-vector/isometric-gastroenterology-composition-with-view-medication-with-tubes-pills-illustration_1284-63536.jpg?uid=R204193115&ga=GA1.1.858881387.1749797072&semt=ais_hybrid&w=740"
            className="w-90 h-40 rounded-lg object-cover"
            alt="Medicines"
          />
          <h2 className="text-center">Medicines</h2>
        </div>
        <div className="shadow-lg w-lg rounded-sm text-center p-3 font-bold text-lg">
          <img
            src="https://img.freepik.com/free-vector/scientists-working-concept_52683-35725.jpg?uid=R204193115&ga=GA1.1.858881387.1749797072&semt=ais_hybrid&w=740"
            className="w-90 h-40 rounded-lg object-cover"
            alt="Lab tests"
          />
          <h2>Lab tests</h2>
        </div>
        <div className="shadow-lg w-lg rounded-sm text-center p-3 font-bold text-lg">
          <img
            src="https://img.freepik.com/free-vector/medical-checkup-concept-illustration_114360-25989.jpg?uid=R204193115&ga=GA1.1.858881387.1749797072&semt=ais_hybrid&w=740"
            className="w-90 h-40 rounded-lg object-cover"
            alt="Doc Consult"
          />
          <h2>Doc Consult</h2>
        </div>
        <div className="shadow-lg w-lg rounded-sm text-center p-3 font-bold text-lg">
          <img
            src="https://img.freepik.com/free-vector/flat-world-health-day-background_23-2149300397.jpg?uid=R204193115&ga=GA1.1.858881387.1749797072&semt=ais_hybrid&w=740"
            className="w-90 h-40 rounded-lg object-cover"
            alt="Health Care"
          />
          <h2>Health Care</h2>
        </div>
        <div className="shadow-lg w-lg rounded-sm text-center p-3 font-bold text-lg">
          <img
            src="https://img.freepik.com/free-vector/doctor-using-online-app-help-patients_23-2148526220.jpg?uid=R204193115&ga=GA1.1.858881387.1749797072&semt=ais_hybrid&w=740"
            className="w-90 h-40 rounded-lg object-cover"
            alt="Health blogs"
          />
          <h2>Health blogs</h2>
        </div>
        <div className="shadow-lg w-lg rounded-sm text-center p-3 font-bold text-lg">
          <img
            src="https://img.freepik.com/free-vector/product-quality-concept-illustration_114360-7301.jpg?uid=R204193115&ga=GA1.1.858881387.1749797072&semt=ais_hybrid&w=740"
            className="w-90 h-40 rounded-lg object-cover"
            alt="Plus"
          />
          <h2>Plus</h2>
        </div>
        <div className="shadow-lg w-lg rounded-sm text-center p-3 font-bold text-lg">
          <img
            src="https://img.freepik.com/free-vector/tiny-pupil-standing-near-huge-gift-box-present-surprise-boy-flat-vector-illustration-birthday-holiday_74855-8634.jpg?uid=R204193115&ga=GA1.1.858881387.1749797072&semt=ais_hybrid&w=740"
            className="w-90 h-40 rounded-lg object-cover"
            alt="Offers"
          />
          <h2>Offers</h2>
        </div>
        <div className="shadow-lg w-lg rounded-sm text-center p-3 font-bold text-lg">
          <img
            src="https://img.freepik.com/free-vector/homeopathy-abstract-concept-illustration_335657-5036.jpg?uid=R204193115&ga=GA1.1.858881387.1749797072&semt=ais_hybrid&w=740"
            className="w-90 h-40 rounded-lg object-cover"
            alt="Value store"
          />
          <h2>Value store</h2>
        </div>
      </div>

      {/* Servicer provider div */}
      <div className="w-[85%] relative">
        <h1 className="text-left font-bold text-2xl mb-4">
          Lab Tests by Health Concern
        </h1>

        {/* Left scroll button */}
        <button
          onClick={() => scrollMed("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
          style={{ marginTop: "20px" }}
        >
          <FaChevronCircleLeft size={24} className="text-gray-700" />
        </button>

        {/* Scrollable container */}
        <div
          className="overflow-x-auto scrollbar-hide"
          ref={scrollRef}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <div className="flex flex-row gap-4 w-max p-10">
            <div className="flex flex-col justify-center font-bold text-xl min-w-[200px]">
              <img
                src="https://img.freepik.com/free-vector/patient-being-examined-by-doctor-clinic-illustrated_23-2148865134.jpg?uid=R204193115&ga=GA1.1.858881387.1749797072&semt=ais_hybrid&w=740"
                className="w-90 h-40 rounded-lg object-cover"
                alt="Full body checkup"
              />
              <h2>Full body checkup</h2>
            </div>
            <div className="flex flex-col justify-center font-bold text-xl min-w-[200px]">
              <img
                src="https://img.freepik.com/free-vector/vitamins-concept-illustration_114360-26493.jpg?uid=R204193115&ga=GA1.1.858881387.1749797072&semt=ais_hybrid&w=740"
                className="w-90 h-40 rounded-lg object-cover"
                alt="Vitamins"
              />
              <h2>Vitamins</h2>
            </div>
            <div className="flex flex-col justify-center font-bold text-xl min-w-[200px]">
              <img
                src="https://img.freepik.com/free-vector/isometric-diabetes-composition-with-text-human-character-with-thought-bubbles-life-situations-insulin-syringe-vector-illustration_1284-79633.jpg?uid=R204193115&ga=GA1.1.858881387.1749797072&semt=ais_hybrid&w=740"
                className="w-90 h-40 rounded-lg object-cover"
                alt="Diabetes"
              />
              <h2>Diabetes</h2>
            </div>
            <div className="flex flex-col justify-center font-bold text-xl min-w-[200px]">
              <img
                src="https://img.freepik.com/free-vector/illustration-thermometer_53876-43945.jpg?uid=R204193115&ga=GA1.1.858881387.1749797072&semt=ais_hybrid&w=740"
                className="w-90 h-40 rounded-lg object-cover"
                alt="Fever and Infection"
              />
              <h2>Fever and Infection</h2>
            </div>
            <div className="flex flex-col justify-center font-bold text-xl min-w-[200px]">
              <img
                src="https://img.freepik.com/free-vector/beauty-salon-services-professional-makeup-stylish-haircut-luxury-cosmetics-hairdresser-making-female-hairdo-client-enjoying-hairsalon-procedures-vector-isolated-concept-metaphor-illustration_335657-1332.jpg?uid=R204193115&ga=GA1.1.858881387.1749797072&semt=ais_hybrid&w=740"
                className="w-90 h-40 rounded-lg object-cover"
                alt="Hair and Skin care"
              />
              <h2>Hair and Skin care</h2>
            </div>
            <div className="flex flex-col justify-center font-bold text-xl min-w-[200px]">
              <img
                src="https://img.freepik.com/free-vector/gradien-thyroid-illustration_23-2149298248.jpg?uid=R204193115&ga=GA1.1.858881387.1749797072&semt=ais_hybrid&w=740"
                className="w-90 h-40 rounded-lg object-cover"
                alt="Thyroid"
              />
              <h2>Thyroid</h2>
            </div>
            <div className="flex flex-col justify-center font-bold text-xl min-w-[200px]">
              <img
                src="https://img.freepik.com/free-vector/hand-drawn-patient-taking-medical-examination_23-2148843031.jpg?uid=R204193115&ga=GA1.1.858881387.1749797072&semt=ais_hybrid&w=740"
                className="w-90 h-40 rounded-lg object-cover"
                alt="Woman care"
              />
              <h2>Woman care</h2>
            </div>
            <div className="flex flex-col justify-center font-bold text-xl min-w-[200px]">
              <img
                src="https://img.freepik.com/free-vector/cardiologist-concept-illustration_114360-6847.jpg?uid=R204193115&ga=GA1.1.858881387.1749797072&semt=ais_hybrid&w=740"
                className="w-90 h-40 rounded-lg object-cover"
                alt="Heart"
              />
              <h2>Heart</h2>
            </div>
            <div className="flex flex-col justify-center font-bold text-xl min-w-[200px]">
              <img
                src="https://img.freepik.com/free-vector/rheumatology-concept-illustration_114360-9278.jpg?uid=R204193115&ga=GA1.1.858881387.1749797072&semt=ais_hybrid&w=740"
                className="w-90 h-40 rounded-lg object-cover"
                alt="Bone care"
              />
              <h2>Bone care</h2>
            </div>
            <div className="flex flex-col justify-center font-bold text-xl min-w-[200px]">
              <img
                src="https://img.freepik.com/free-vector/overweight-man-eating-burger-tiny-people-giving-fast-food-overeating-addiction-binge-eating-disorder-compulsive-overeating-treatment-concept-pinkish-coral-bluevector-isolated-illustration_335657-1474.jpg?uid=R204193115&ga=GA1.1.858881387.1749797072&semt=ais_hybrid&w=740"
                className="w-90 h-40 rounded-lg object-cover"
                alt="Life style"
              />
              <h2>Life style</h2>
            </div>
          </div>
        </div>

        {/* Right scroll button */}
        <button
          onClick={() => scrollMed("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
          style={{ marginTop: "20px" }}
        >
          <FaChevronCircleRight size={24} className="text-gray-700" />
        </button>
      </div>

      {/* Prescription upload div */}
      <div className="flex flex-row justify-center items-center self-center content-center w-[85%] m-0-auto border ">
        <div className="flex flex-row w-1/2">
          <div>
            <img
              src="https://img.freepik.com/free-vector/pills-prescription-human-hands-flat-vector-illustration-patient-taking-medication-vitamins-medicine-healthcare-treatment-concept-banner-website-design-landing-web-page_74855-26092.jpg?uid=R204193115&ga=GA1.1.858881387.1749797072&semt=ais_hybrid&w=740"
              className="w-40 h-30"
            />
          </div>
          <div className="m-5 text-md">
            <h1 className="font-medium">Prescription us!</h1>
            <p>Upload prescription and we will deliver your medicines</p>
            <button className="m-2 p-2 font-bold color-green rounded-sm bg-green-200">
              {/* <span> */}
              <GrAttachment />
              {/* </span> */}
              Upload
            </button>
          </div>
        </div>
        <div className="w-1/2">
          <h2>How does this work?</h2>
          <ol>
            <li>Upload a photo of your prescription</li>
            <li>Add delivery address and place order</li>
            <li>
              Now, sit back! and wait for your medicines at your doorsteps
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Home;
