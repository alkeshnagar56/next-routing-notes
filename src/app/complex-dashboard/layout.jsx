import { Children } from "react";

export default function complexDashboardlayout({Children, users, revenue, notification, login}){

    // const isLoggedIn = true;
    const isLoggedIn = false;
// console.log(login)
    return isLoggedIn ? (
        <>
        {Children}
        <div style={{display:"flex"}}>
        <div style={{display:"flex", flexDirection:"column"}}>
            <div>{users}</div>
            <div>{revenue}</div>
            </div>
            <div style={{display:"flex", flex:1}}>{notification}</div>
            {/* <div>{login}</div> */}
            </div>
        </>
    ) : ( 
       login
       
    )
    //     login
    // )
}
