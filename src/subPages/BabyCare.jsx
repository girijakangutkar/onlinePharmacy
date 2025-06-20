import React, { useEffect, useState } from "react";
import { RingLoader } from "react-spinners";

const BabyCare = () => {
  const [babyCare, setBabyCare] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchBabyCare();
  }, []);

  const fetchBabyCare = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(
        "https://api.prod.instamed.in/api/v1/get-master-menu-items-by-menu-id-web/78?perPage=50&page=3&language=en"
      );
      const info = await res.json();
      //   console.log(info?.data?.data);
      setBabyCare(info?.data?.data);
    } catch (error) {
      console.log("something went wrong: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-row justify-center p-10 w-full">
        <div className="w-1/5 b-right">
          <p>sorting algorithms</p>
        </div>
        <div className="w-4/5 overflow-auto max-h-[80vh]">
          <div className="absolute top-[50%] left-[60%]">
            <RingLoader color="#b82929" loading size={80} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-row justify-center p-10 w-full">
      <div className="w-1/5">
        <p>sorting algorithms</p>
      </div>
      <div className="w-4/5 overflow-auto max-h-[80vh] hide-scrollbar">
        <h1 className="font-bold text-2xl m-5 mt-0">BABY CARE</h1>

        <div className="grid justify-center m-10-auto gap-5 grid-cols-4 self-center ">
          {babyCare.map((med) => (
            <div
              key={med.master_menu_item_id}
              className="flex flex-col border border-[#ccc] p-2 rounded-lg shadow-lg overflow-auto items-center content-center align-center self-center justify-center"
            >
              <img
                src={med?.image?.image_name}
                alt="aurved"
                className="object-contain h-[100px] w-[100px]"
              />
              <h2
                className="truncate-paragraph text-center"
                title={med.item_name}
              >
                {med.item_name}
              </h2>
              <p className="truncate-paragraph w-full pl-4 text-left">
                {med.item_description}
              </p>

              <h2 className="text-left w-full pl-5">₹ {med.price}</h2>
              <button className="bg-[#b82929] p-1.5 w-[60%] rounded-md text-white m-3">
                Buy
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BabyCare;
