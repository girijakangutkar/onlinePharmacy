import React, { useEffect, useState } from "react";

const HealthCare = () => {
  const [healthCare, setHealthCare] = useState([]);

  useEffect(() => {
    fetchHealthCare();
  }, []);

  const fetchHealthCare = async () => {
    try {
      const res = await fetch(
        "https://api.prod.instamed.in/api/v1/get-master-menu-items-by-menu-id-web/110?perPage=50&page=5&language=en"
      );
      const info = await res.json();
      console.log(info?.data?.data);
      setHealthCare(info?.data?.data);
    } catch (error) {
      console.log("something went wrong: ", error);
    }
  };
  return (
    <div>
      {healthCare.map((med) => (
        <div key={med.master_menu_item_id}>
          <h2>{med.item_name}</h2>
        </div>
      ))}
    </div>
  );
};

export default HealthCare;
