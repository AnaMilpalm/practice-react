import { useState, useEffect } from "react";

const ClickLocalStorage = () => {
    const [clicks, setClicks] = useState(() => {
        const savedClicks = window.localStorage.getItem("saved-clicks");
        if (savedClicks !== null) {
            return Number(savedClicks);
        }
        return 0;
    });

    useEffect(() => {
        window.localStorage.setItem("saved-clicks", clicks);
    }, [clicks]);

    return (
        <div>
            <button onClick={() => setClicks(clicks + 1)}>
                You clicked {clicks } times
            </button>
            <button onClick={() => setClicks(0)}>Reset</button>
        </div>
    );
};

export default ClickLocalStorage;




export const CommonState = () => {
	const [clicks, setClicks] = useState(0);

	const handleClickForFewButton = () => {
    setClicks(clicks + 1);
  };
  const ClickCounter = ({ value, onUpdate }) => {
	return <button onClick={onUpdate}>Current: {value}</button>
};
  return (
    <>
			<ClickCounter value={clicks} onUpdate={handleClickForFewButton}/>
            <ClickCounter value={clicks} onUpdate={handleClickForFewButton}/>

    </>
  );
};
