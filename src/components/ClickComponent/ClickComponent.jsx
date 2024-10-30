import { useState, useEffect } from "react";
import s from './ClickComponent.module.css';

const ClickComponent = () => {
    const [clicks, setClicks] = useState(0);

    useEffect(() => {
        document.title = `You cliked ${clicks} times`;
    });

    // useEffect(() => {
    //     console.log("You can see me only once!");
    // }, []); // лише один раз
    
    return (
        <button className={s.button} onClick={() => setClicks(clicks + 1)}>
            You clicked {clicks} times
        </button>
    );
};

export default ClickComponent;