import React, { useState } from "react";

const Medicines = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [displayedMedicines, setDisplayedMedicines] = useState([]);

  const medicines = [
    { id: 1, name: "Aspirin" },
    { id: 2, name: "Ibuprofen" },
    { id: 3, name: "Paracetamol" },
    { id: 4, name: "Amoxicillin" },
    { id: 5, name: "Ciprofloxacin" },
  ];

  const showMedicines = () => {
    const filtered = medicines.filter((med) =>
      med.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setDisplayedMedicines(filtered);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search Medicines"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-gray-300 rounded px-4 py-2 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <button
        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 w-full"
        onClick={showMedicines}
      >
        Show Medicines
      </button>

      <ul className="mt-4">
        {displayedMedicines.length > 0 ? (
          displayedMedicines.map((med) => (
            <li key={med.id} className="p-2 bg-gray-100 rounded mb-2 shadow-sm">
              {med.name}
            </li>
          ))
        ) : (
          <p className="text-gray-500 mt-4">No medicines to display.</p>
        )}
      </ul>
    </div>
  );
};

export default Medicines;
