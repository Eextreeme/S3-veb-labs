import { useState } from "react";

const Counter = ({ start, onChange }) => {
    const [counter, setCounter] = useState(start);

    const handleIncrease = () => {
        setCounter(counter + 1);
        onChange(counter + 1);
    }
    const handleDecrease = () => {
        if (counter > 1) {
            setCounter(counter - 1);
            onChange(counter - 1);
        }
    }

    return (
        <div className="p-2 rounded-full border flex ">
            <button className="p-2 rounded-full hover:bg-slate-100 duration-200" onClick={handleDecrease}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
            </button>

            <p className="p-2">{counter}</p>

            <button className="p-2 rounded-full hover:bg-slate-100 duration-200" onClick={handleIncrease}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </button>
        </div>
    );
}

export default Counter;