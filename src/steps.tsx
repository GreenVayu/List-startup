import React from 'react';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import EventNoteIcon from '@mui/icons-material/EventNote';
import DescriptionIcon from '@mui/icons-material/Description';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const steps = [
  { icon: <LightbulbIcon fontSize="large" />, label: 'Idea Generation and Validation' },
  { icon: <EventNoteIcon fontSize="large" />, label: 'Business Planning' },
  { icon: <DescriptionIcon fontSize="large" />, label: 'Legal Considerations and Funding Opportunities' },
  { icon: <BusinessCenterIcon fontSize="large" />, label: 'Setting Up Your Business' },
  { icon: <SupportAgentIcon fontSize="large" />, label: 'Marketing & Sublime Customer Support' },
];

const ProgressSteps = () => {
  return (
    <div className="flex flex-col items-center lg:flex-row lg:justify-center">
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col items-center lg:flex-row lg:items-center">
          <div className="flex flex-col items-center">
            <div className="p-4 bg-yellow-500 rounded-full">
              {step.icon}
            </div>
            <p className="mt-2 text-center text-gray-700">{step.label}</p>
          </div>
          {index < steps.length - 1 && (
            <div className="hidden lg:flex items-center">
              <div className="w-24 h-1 bg-green-600 mx-4"></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProgressSteps;
