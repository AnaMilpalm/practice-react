import s from './Counter.module.css';
import {useState} from 'react';

const Counter = () => {
const [counter, setCounter] = useState(100);
const [step, setStep] = useState(111)
const handlePlusClick = () => {
    console.log(counter);
    // setCounter(counter + 1);
    setCounter(prevState => prevState + step);
};

const handleMinusClick = () => {
    setCounter(prevState => prevState - step);
}

const handleReset = () => {
    setCounter(0);
}
    return (
        <div className={s.flexConteiner}>
            <div className={s.wrapper}>
                <h1>{counter}</h1>
                <input onChange={(e) => {
                    setStep(+e.target.value)
                }}/>
                <div className={s.flex}>
                    <button onClick={handleMinusClick} className={s.btn}>minus</button>
                    <button onClick={handleReset} className={s.btn}>reset</button>
                    <button onClick={handlePlusClick}  className={s.btn}>plus</button>
                </div>
            </div>


        </div>
    )
}

export default Counter;