import { useState } from "react";
export const Practice2 = () => {
    const [display, setDisplay] = useState("none")
    const onDisplay = () => {
        return setDisplay("block")
    }
    return (

        <div >
            <div style={{
                color: "blue", height: "50px", width: "70px", border: "2px solid black", display: display, marginLeft: "48%"
            }} ></div>
            <button onClick={onDisplay}>Rectangle</button>
        </div>
    )
}