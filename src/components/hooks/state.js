import { useState } from "react"
import { Practice1 } from "./practice1";
import { Practice2 } from './practice2';
import { Practice3 } from './practice3';
import { Practice4 } from "./practice4";
import { Practice5 } from "./practice5";
import { Practice6 } from "./practice6";
import { Practice7 } from "./practice7";
export const UseStateHook = () => {
    const [counter, setCounter] = useState(0)

    const increment = () => {
        if (counter < 10) {
            return setCounter(counter + 1);
        } else {
            return 10
        }
    }


    const decrement = () => {
        if (counter > 0) {
            return setCounter(counter - 1);
        } else {
            return (counter)
        }

    }
    const reset = () => {
        setCounter(0)
    }
    return (
        <div style={{ textAlign: "center" }}>
            <h1>{counter}</h1>

            <button style={{ backgroundColor: "green" }} onClick={increment}>Increment</button>
            <button style={{ backgroundColor: "red" }} onClick={decrement}>Decrement</button>
            <br /> 
            <button style={{ backgroundColor: "skyblue" }} onClick={reset}>Reset</button> <hr/>
            <Practice1 /> <hr/>
            <Practice2 /> <hr/>
            <Practice3 /><hr/>
            <Practice4 /><hr/>
            <Practice5 /><hr/>
            <Practice6/><hr/>
            <Practice7/><hr/><br></br>
        </div>

    )
}