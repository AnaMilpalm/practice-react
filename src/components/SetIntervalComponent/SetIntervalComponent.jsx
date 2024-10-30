import s from './SetIntervalComponent.module.css';
import { useState, useEffect } from 'react';


const SetIntervalComponent = () => {
    useEffect(() => {
       const intervalId = setInterval(() => {
            console.log(`Interval - ${Date.now()}`)
        }, 2000);
        return () => clearInterval(intervalId);
    },[]);

    return <div>App</div>
}

  export default SetIntervalComponent;