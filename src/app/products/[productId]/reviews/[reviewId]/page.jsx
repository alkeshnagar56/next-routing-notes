"use client"

import { notFound } from "next/navigation";

function getRandomInt (count){
  return Math.floor(Math.random()*count);
}

export default function productdetails({params}){
  const random = getRandomInt(2);

  if (random === 1){
    throw new Error("Error in loading the review") //This messege is imported in the error.jsx and will be rendered over there , it the webpage enquanters any error.
  }

    if(parseInt(params.reviewId)>1000){
        notFound();
    }
    return (
      <>
        <h1>Product details for {params.productId}</h1>
        <h1>Product review for {params.productId} is {params.reviewId}</h1>
      </>
    );
  }
  