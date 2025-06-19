import React from 'react'

const Medicines = () => {

    // create a search bar that filters medicines by name

    const [searchTerm, setSearchTerm] = React.useState('');
    const medicines = [
        { id: 1, name: 'Aspirin' },
        { id: 2, name: 'Ibuprofen' },
        { id: 3, name: 'Paracetamol' },
        { id: 4, name: 'Amoxicillin' },
        { id: 5, name: 'Ciprofloxacin' }
    ];

  return(
    <div>
      <input
        type="text"
        placeholder="Search Medicines"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ border: '1px solid #ccc', color: 'red', padding: '10px', margin: '10px 10px' }}
      />
    </div>
  )
}

export default Medicines