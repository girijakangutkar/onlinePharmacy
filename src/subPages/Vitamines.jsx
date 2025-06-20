import React, { useEffect, useState } from "react";

const Vitamines = () => {
  const [vitamines, setVitamines] = useState([]);

  useEffect(() => {
    fetchVitamines();
  }, []);

  const fetchVitamines = async () => {
    try {
      const res = await fetch(
        "https://api.prod.instamed.in/api/v1/get-master-menu-items-by-menu-id-web/109?perPage=50&page=4&language=en"
      );
      const info = await res.json();
      console.log(info?.data?.data);
      setVitamines(info?.data?.data);
    } catch (error) {
      console.log("something went wrong: ", error);
    }
  };

  return (
    <div>
      {vitamines.map((med) => (
        <div key={med.master_menu_item_id}>
          <h2>{med.item_name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Vitamines;
