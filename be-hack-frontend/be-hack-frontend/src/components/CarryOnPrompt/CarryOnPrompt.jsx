// Import necessary components and styles
import React, { useState } from 'react';
import { Button } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

import "./CarryOnPrompt.css";

// Functional component for the carry-on prompt
const CarryOnPrompt = () => {
  // State variables to track button clicks
  const [isRedClicked, setRedClicked] = useState(false);
  const [isBlueClicked, setBlueClicked] = useState(false);

  // Event handler for the 'Yes' (blue) button click
  const handleBlueClick = () => {
    setBlueClicked(true);
    setRedClicked(false); // Reset the red button state
  };

  // Event handler for the 'No' (red) button click
  const handleRedClick = () => {
    setRedClicked(true);
    setBlueClicked(false); // Reset the blue button state
  };

  // JSX rendering of the component
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      {/* Prompt message */}
      <p style={{ fontSize: '24px', marginBottom: '20px' }}>Will you be bringing a carry-on bag?</p>

      {/* Buttons for 'Yes' and 'No' options */}
      <div style={{ marginBottom: '20px' }}>
        {/* 'Yes' (blue) button */}
        <Button
          variant='outline'
          style={{ backgroundColor: isBlueClicked ? 'blue' : 'transparent', width: '150px', height: '100px', marginRight: '10px' }}
          onClick={handleBlueClick}
        >
          Yes, I have a bag
        </Button>

        {/* 'No' (red) button */}
        <Button
          variant='outline'
          style={{ backgroundColor: isRedClicked ? 'red' : 'transparent', width: '150px', height: '100px', marginLeft: '10px'}}
          onClick={handleRedClick}
        >
          No, I have no bag
        </Button>
      </div>

      {/* Confirmation button linking to the '/Confirmation' route */}
      <Button variant='outline'>
        <Link to={"/Confirmation"}> Confirmation </Link>
      </Button>
    </div>
  );
}

// Export the component for use in other parts of the application
export default CarryOnPrompt;

