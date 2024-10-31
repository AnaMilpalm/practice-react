import { useState, useEffect } from "react";
import s from './ClickComponent.module.css';

const ClickComponent = () => {
    const [clicks, setClicks] = useState(0);

   	// ✅ Залежності вказані правильно
  useEffect(() => {
    console.log("Clicks updated: ", clicks);
  }, [clicks]);

    useEffect(() => {
        document.title = `You cliked ${clicks} times`;
    });

    useEffect(() => {
        console.log("You can see me only once!");
    }, []); // лише один раз

    useEffect(() => {
        console.log('Clicks changed - ${clicks}');
    }, [clicks]); // зафіксували результат

    useEffect(() => {
        window.localStorage.setItem("saved-clicks", clicks)
        // window.localStorage.setItem("key", JSON.stringify({}));

    }, [clicks]);
    
    return (
        <div>
        <button className={s.button} onClick={() => setClicks(clicks + 1)}>
            You clicked {clicks} times
        </button>
        <button onClick={() => setClicks(0)}>Reset</button>
        </div>
    );
};

export default ClickComponent;

// const [obj, setObj] = useState(() => {
//     const savedObject = window.localStorage.getItem("key");
    
//     if (savedObject !== null) {
//         return JSON.parse(savedObject);
//     }

//     return {};
// });