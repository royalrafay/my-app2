import { useState } from "react";
export const Practice4=()=>{
    const user1={name:"john",location:"nanded",position:"software developer"}
    const user2={name:"matthew",location:"mumbai",position:"project manager"}
    const [userDetail,setUserDetail]=useState(user1)
    const click=()=>{
        if (userDetail.name==="john") {
            return setUserDetail(user2)
        } else {
            setUserDetail(user1)
        }
    }
    return(
        <div>
            <h1>My Name is {userDetail.name} my Location is {userDetail.location} my position is {userDetail.position}</h1>
            <button onClick={click}>change</button>
        </div>
    )
}
