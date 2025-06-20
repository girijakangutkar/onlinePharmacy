import React, { useEffect, useState } from "react";

const PersonalCare = () => {
  const [personalCare, setPersonalCare] = useState([]);

  useEffect(() => {
    fetchPersonalCare();
  }, []);

  const fetchPersonalCare = async () => {
    try {
      const res = await fetch(
        "https://api.prod.instamed.in/api/v1/get-master-menu-items-by-menu-id-web/79?perPage=50&page=6&language=en"
      );
      const info = await res.json();
      console.log(info?.data?.data);
      setPersonalCare(info?.data?.data);
    } catch (error) {
      console.log("something went wrong: ", error);
    }
  };
  return (
    <div>
      {personalCare.map((med) => (
        <div key={med.master_menu_item_id}>
          <h2>{med.item_name}</h2>
        </div>
      ))}
    </div>
  );
};

export default PersonalCare;
