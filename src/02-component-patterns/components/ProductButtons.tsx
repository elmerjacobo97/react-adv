import {CSSProperties, useCallback, useContext} from "react";
import styles from "../styles/styles.module.css";
import { ProductContext } from "./ProductCard";

export interface Props {
    className?: string;
    style?: CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
    const { counter, increaseBy, maxCount} = useContext(ProductContext);

    const isMaxReached = useCallback(
        () => !!maxCount && counter === maxCount,
        [counter, maxCount],
    )

    return (
        <div
            className={`${ styles.buttonsContainer } ${className}`}
            style={style}
        >
            <button
                type="button"
                className={ styles.buttonMinus }
                onClick={() => increaseBy(-1)}
            > - </button>
            <div className={ styles.countLabel }> {counter} </div>
            <button
                type="button"
                className={`${ styles.buttonAdd} ${isMaxReached() && styles.disable }`}
                onClick={() => increaseBy(+1)}
            > + </button>
        </div>
    )
}
