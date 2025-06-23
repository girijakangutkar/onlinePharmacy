import React, { useContext, useEffect, useRef } from "react";
import { RingLoader } from "react-spinners";
import { FetchIt } from "../context/FetchContext";
import SearchBar from "../utils/SearchBar";
import PriceSort from "../utils/PriceSort";
import ProtectedAction from "../components/ProtectedAction";
import { CartContext } from "../context/CartContext";

const Aurvedic = () => {
  const { fetchMedicines, totalPages, isLoading, PriceFilter } =
    useContext(FetchIt);
  const { addToCart } = useContext(CartContext);
  const currentPageRef = useRef(1);
  const API = `https://api.prod.instamed.in/api/v1/get-master-menu-items-by-menu-id-web/80?perPage=50&page=${currentPageRef.current}&language=en`;

  const handleAddToCart = (item) => {
    addToCart(item);
    alert("Success");
  };

  useEffect(() => {
    fetchMedicines(API);
  }, []);

  const prev = () => {
    if (currentPageRef.current > 1) {
      currentPageRef.current -= 1;
    }
    fetchMedicines(API);
  };

  const next = () => {
    currentPageRef.current += 1;
    fetchMedicines(API);
    console.log(API);
  };

  if (isLoading) {
    return (
      <div className="flex flex-row justify-center p-10 w-full mt-[3%]">
        <div className="absolute top-[50%] left-[60%]">
          <RingLoader color="#b82929" loading size={80} />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center sm:flex-col md:flex-col xl:flex-row 2xl:flex-row justify-center p-4 w-full mt-[3%]">
      <div className="flex flex-row sm:flex-row md:flex-row xl:flex-col 2xl:flex-col justify-start items-center self-start sm:self-center md:self-center xl:self-start 2xl:self-start w-1/5 mt-2 xl:mt-10">
        <SearchBar />
        <PriceSort />
      </div>
      <div className="w-full sm:w-full md:w-[90%] xl:w-w-4/5 2xl:w-w-4/5 overflow-auto max-h-[80vh] hide-scrollbar 2xl:mt-10">
        <h1 className="font-bold text-2xl m-5 mt-0">AURVEDIC</h1>

        <div className="grid justify-center m-0-auto gap-2 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 self-center">
          {PriceFilter().length == 0 && (
            <p className="ml-5 text-xl color-red w-full text-red-700">
              Not found!
            </p>
          )}
          {PriceFilter().map((med) => (
            <div
              key={med.master_menu_item_id}
              className="flex flex-col border border-[#ccc] p-2 rounded-lg shadow-lg overflow-auto items-center content-center align-center self-center justify-center"
            >
              <img
                src={med.image.image_name}
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
              <ProtectedAction
                fallbackComponent={
                  <button
                    onClick={() => requireAuth(() => handleAddToCart(med))}
                  >
                    Login in to buy
                  </button>
                }
                className="w-full"
              >
                <button
                  onClick={() => handleAddToCart(med)}
                  className="bg-[#b82929] p-1.5 w-[80%] rounded-md text-white m-3"
                >
                  Buy
                </button>
              </ProtectedAction>
            </div>
          ))}
        </div>
        <div className="m-2 flex flex-row items-center justify-center mt-5 w-full">
          <button
            onClick={prev}
            disabled={currentPageRef.current == 1}
            className="mr-5 p-2 bg-green-800 text-white rounded-md shadow-lg"
          >
            Previous
          </button>
          <h2>
            {currentPageRef.current}/{totalPages}
          </h2>
          <button
            onClick={next}
            className="ml-5 p-2 bg-green-800 text-white rounded-md shadow-lg"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Aurvedic;
