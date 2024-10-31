import { useState } from 'react';
const CustomButton = ({ message, children }) => {
    return (
      <button onClick={() => alert(message)}>
        {children}
      </button>
    );
  };
  
  export const ButtonSeconds = () => {
    return (
      <>
        <CustomButton message="Playing music!">
          Play some music
        </CustomButton>
        <CustomButton message="Uploading your data!">
          Upload data
        </CustomButton>
      </>
    );

  }
  
  export default CustomButton;

  

export const ButtonThird = () => {
	const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

	return <button onClick={handleClick}>Current: {clicks}</button>
};

export function ButtonFewStates() {
    const [clicks, setClicks] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
  
    const handleClick = () => {
      setClicks(clicks + 1);
    };
  
    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <>
        <button onClick={handleClick}>Current: {clicks}</button>
        <button onClick={handleToggle}>{isOpen ? "Hide" : "Show"}</button>
        {isOpen && <p>Now you can see me!</p>}
      </>
    );
  };
  