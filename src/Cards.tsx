import React, { useState } from 'react';

// Define a type for the card props
interface CardProps {
  icon: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-4 ">
      <div className="flex justify-center items-center w-16 h-16 bg-yellow-500 rounded-full mb-4">
        <img src={icon} alt="Icon" className="w-8 h-8" />
      </div>
      <h2 className="text-center text-xl font-bold mb-2">{title}</h2>
      <p className="text-center text-gray-600">{description}</p>
    </div>
  );
};

const App: React.FC = () => {
    const cardsData: CardProps[] = [
        {
          icon: "/ourstory/Vector.png",
          title: "Empowerment",
          description: "We believe in equipping individuals with the knowledge & tools needed to take control of their entrepreneurial journey and achieve their goals."
        },
        {
          icon: "/ourstory/Vector1.png",
          title: "Support",
          description: "We offer unwavering assistance and guidance, ensuring that entrepreneurs receive the encouragement and help necessary to navigate challenges and succeed."
        },
        {
          icon: "/ourstory/Vector2.png",
          title: "Education",
          description: "Through our workshops, mentorship programs, and resources, we provide valuable learning opportunities that empower entrepreneurs to continuously develop their skills and knowledge."
        },
      ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? cardsData.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === cardsData.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="flex justify-center items-center min-h-screen relative mr-4">
      <button
        className="absolute left-4 transform -translate-y-1/2 -translate-x-9 top-1/2 p-2 rounded-full bg-white shadow hover:shadow-lg"
        onClick={handlePrevious}
      >
        <span className="sr-only">Previous</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <Card
        icon={cardsData[currentIndex].icon}
        title={cardsData[currentIndex].title}
        description={cardsData[currentIndex].description}
      />

      <button
        className="absolute right-4 transform -translate-y-1/2 translate-x-9 top-1/2 p-2 rounded-full bg-white shadow hover:shadow-lg"
        onClick={handleNext}
      >
        <span className="sr-only">Next</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default App;







