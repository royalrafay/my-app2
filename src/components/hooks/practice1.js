import { useState } from "react"
export const Practice1 = () => {
    const [name, setName] = useState("Tekisky")
    const [color, setColor] = useState("black")
    const getName = () => {
        return setName("Tekisky pvt ltd")
    }
    const hover = () => {
        return setColor("yellow")
    }
    return (

        < div style={{ textAlign: "center" }}>
            <h1 onMouseOver={hover} style={{ color: color }}>{name}</h1>

            <button style={{ backgroundColor: "yellow" }} onClick={getName}>Get Full Name</button>

        </div >

    )
}