import React, { useState } from 'react';
import './App.css'; // Import the CSS file

// Sample data for people
const peopleData = [
  { id: 1, name: 'Hadi Abdullah', job: 'Flutter Developer', imageUrl: 'https://media.licdn.com/dms/image/C4E03AQHEqrbb_tFfsA/profile-displayphoto-shrink_800_800/0/1638286261142?e=1720656000&v=beta&t=aHUVYzB4Yep64BIzwqM01nTlwPdswasoybaP_NUDMNk', appointments: [] },
  { id: 2, name: 'Jane Smith', job: 'Web Designer', imageUrl: 'https://www.automotivaters.com/sites/default/files/images/CamHead2018-150x150px.jpg', appointments: [] },
  { id: 3, name: 'Alice Johnson', job: 'Software Engineer', imageUrl: 'https://img.freepik.com/free-photo/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950.jpg?w=740&t=st=1714987337~exp=1714987937~hmac=6c9c2ff67b8e757cc970ac5d8308c95fefb02008569001b8e7415328bd7f0020', appointments: [] },
  { id: 4, name: 'Anjali k', job: 'Data Scientist', imageUrl: 'https://www.shutterstock.com/image-photo/headshot-portrait-confident-young-indian-260nw-2021632466.jpg', appointments: [] },
  // Add more people as needed
];

const PersonCard = ({ person, onCardClick, isSelected }) => {
  return (
    <div className={`person-card ${isSelected ? 'selected' : ''}`} onClick={() => onCardClick(person)}>
      <img src={person.imageUrl} alt={person.name} />
      <h3>{person.name}</h3>
      <p>{person.job}</p> {/* Display the job information */}
    </div>
  );
};

const App = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);

  const handleCardClick = (person) => {
    if (selectedPerson && selectedPerson.id === person.id) {
      // Deselect the person if already selected
      setSelectedPerson(null);
    } else {
      setSelectedPerson(person);
    }
  };

  return (
    <div>
      <h1>placeX</h1>
      <div className="container">
        {peopleData.map((person) => (
          <PersonCard
            key={person.id}
            person={person}
            onCardClick={handleCardClick}
            isSelected={selectedPerson && selectedPerson.id === person.id}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
