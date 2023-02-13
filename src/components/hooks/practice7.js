export const Practice7=()=>{
    const userData = [
        { firstName: "junaid", lastName: "khan", location: "mumbai", age: 26 },
        { firstName: "umed", lastName: "uddin", location: "mumbai", age: 28 },
        { firstName: "aamer", lastName: "khan", location: "chennai", age: 30 },
        { firstName: "khizer", lastName: "mohammad", location: "hyderabad", age: 35 },
        { firstName: "uzer", lastName: "uddin", location: "kolkata", age: 18 },
        { firstName: "hanzala", lastName: "shaikh", location: "pune", age: 25 },
        { firstName: "faheen", lastName: "khan", location: "chennai", age: 28 },
        { firstName: "sohail", lastName: "qazi", location: "hyderabad", age: 32 },
        { firstName: "mubeen", lastName: "uddin", location: "hyderabad", age: 36 },
        { firstName: "inayat", lastName: "khan", location: "hyderabad", age: 24 },
      ];
    return(
         <div>
            <table border={"2px solid black"} >
                <thead>
                <tr>
                    <th>sr.no</th>
                    <th>firstName</th>
                    <th>lastName</th>
                    <th>location</th>
                    <th>age</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>-</td>
                    <td>{userData.firstName}</td>
                    <td>{userData.lastName}</td>
                    <td>{userData.location}</td>
                    <td>{userData.age}</td>
                </tr>
                </tbody>
            </table>
            <button>Register Data</button>
         </div>
    )
}