import { useState, useEffect, useDeferredValue } from "react";
const Modal = () => {
    useEffect(() => {
    const intervalId = setInterval(() => {
        console.log(`Interval - ${Date.now()}`);
      }, 2000);

      return () => clearInterval(intervalId);
    }, []);
  
    return <div>Modal</div>;
  };
  
export const Button = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "Close" : "Open"}
            </button>
            {isOpen && <Modal />}
        </div>
    )
}
  
  export default Modal;