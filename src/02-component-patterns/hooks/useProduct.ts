import {useState} from "react";

const useProduct = () => {
    const [counter, setCounter] = useState(0);

    const increaseBy = (value: number) => {
        setCounter(prevState => Math.max(prevState + value, 0));
    }

    return {
        counter,
        increaseBy,
    }
}

export default useProduct;
