import { useState } from "react";
export const Practice3 = () => {
    const [value, setValue] = useState()
    const [finalValue, setFinalValue] = useState()
    const change = (e) => {
        setValue(e.target.value)
    }
    const click = () => {
        setFinalValue(value)
    }
    
    return (
        <div>
            <input type={"text"} onChange={change} />
            <button onClick={click}> GET</button>
            <p>{finalValue}</p>
        </div>
    )
}