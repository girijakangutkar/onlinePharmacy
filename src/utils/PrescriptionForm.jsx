import React, { useState, useRef } from "react";
import { GrAttachment } from "react-icons/gr";
import { CgCloseO } from "react-icons/cg";
import axios from "axios";

const PrescriptionForm = ({ handleUploadForm }) => {
  const [fileName, setFileName] = useState("");
  const inputRef = useRef(null);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");

  const handleUpload = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(import.meta.env.VITE_REALDB, {
        name,
        address,
        number,
        fileName,
      });
      console.log(res.data);
      alert("Submitted");
    } catch (error) {
      console.log("Something went wrong:", error);
    } finally {
      setName("");
      setAddress("");
      setNumber("");
      setFileName("");
    }
  };

  return (
    <div className=" w-[85%] m-2 mt-0 top-30 sm:top:25 md:top-25 md:w-[50%] lg:top-30 xl:top-40 2xl:top-40 3xl:top-40 bg-gray-100 p-10 rounded-lg shadow-lg z-1000 absolute">
      <div className="absolute right-4 top-4">
        <button onClick={handleUploadForm}>
          <CgCloseO size={24} color={"red"} />
        </button>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col w-full relative">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Upload Prescription
        </h2>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-[#ccc] p-1.5 rounded-sm m-2 ml-0 shadow-sm"
          required
        />
        <label
          htmlFor="address"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Address
        </label>
        <textarea
          type="text"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="border border-[#ccc] p-1.5 rounded-sm m-2 ml-0 shadow-sm resize-none"
          required
        />

        <label
          htmlFor="number"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Phone Number
        </label>
        <input
          type="number"
          name="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="border border-[#ccc] p-1.5 rounded-sm m-2 ml-0 shadow-sm"
          required
        />
        <div className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center hover:border-blue-400 transition-colors duration-200">
          <input
            type="file"
            accept="image/*"
            // style={{ display: "none" }}
            className="p-5 m-3 ml-0"
            onChange={handleUpload}
            placeholder="Drag and drop here"
            ref={inputRef}
            required
          />
          <button
            onClick={() => inputRef.current?.click()}
            type="button"
            className="flex flex-cols justify-center items-center m-2 ml-0 p-2 font-bold color-green rounded-md bg-cyan-200 shadow-sm"
          >
            <GrAttachment />
            &nbsp; Upload
          </button>
        </div>
        <button
          type="submit"
          className="flex flex-cols justify-center items-center m-2 ml-0 p-2 font-bold rounded-md bg-green-500 shadow-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PrescriptionForm;
