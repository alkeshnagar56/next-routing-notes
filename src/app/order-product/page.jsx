"use client"; 

import React from "react";
import { useRouter } from "next/navigation";

const orderproduct = () => {
    const router = useRouter();

    const handleclick=()=>{
        console.log("Placing your Order");


        router.push("/");
        // router.replace("/");
        // router.back("/");
        // router.forward("/");
        
        // the userouter hook which is assigned in the router will nevigate us on any path which is given in it.we can use .push() method as shown above, or replace(), or .back() or .forward() to navigate over there.

    }


  return (
    <>
      <h1> Order Product</h1>
      <button onClick={handleclick}>Place Order</button>
    </>
  );
};

export default orderproduct;
