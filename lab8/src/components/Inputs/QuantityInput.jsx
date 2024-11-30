import { useState } from "react";

const QuantityInput = ({ initValue, onChange }) => {
    const [counter, setCounter] = useState(initValue);

    const changeHandler = (isNegative) => {
        if (isNegative) {
            if (counter !== 1) {
                setCounter(counter - 1);
                onChange(counter - 1);
            }
        } else {
            setCounter(counter + 1);
            onChange(counter + 1);
        }
    }

    return <div className="flex items-center border rounded-[6px]">
        <button
            onClick={() => {changeHandler(true)}}
            className="px-2"
        >{`<`}</button>
        <p className="px-2">{counter}</p>
        <button
            onClick={() => {changeHandler(false)}}
            className="px-2"
        >{`>`}</button>
    </div>
}

export default QuantityInput;
