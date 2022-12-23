import {useState} from "react";

const useCounter = (initialValue = 0) => {
    const [count, setCount] = useState(initialValue);

    const increment = () => setCount(prevValue => prevValue + 1);
    const decrement = () => setCount(prevValue => prevValue - 1);
    const reset = () => setCount(initialValue);

    return {
        count,
        setCount,
        increment,
        decrement,
        reset,
        initialValue,
    };
};

export default useCounter;

