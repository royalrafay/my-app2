import { useState } from "react"
export const Practice5=()=>{
const [login,setLogin]=useState(false)

    return(
        <div>
            <h1>
                {login ? "You Are Login" : "you are Logout"} 
            </h1>
            <button onClick={()=>{
                setLogin(login?false:true)
               // login?setLogin(false):setLogin(true)  
            }}>
                {login ? "Login" : "Logout"}
            </button>
        </div>
    )
}