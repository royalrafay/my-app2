import { useState } from "react"
export const Practice6 = () => {
    const [list, setList] = useState([])
    const click = () => {
        setList([...list, 'li'])
    }
    return (
        <div>
            <button onClick={click}>Add list</button>
            <ul>
                {list.map((value, i) => <li key={i}>{value}</li>)}
            </ul>
        </div>
    )
}