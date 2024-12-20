import { Metadata } from "next";
import { resolve } from "styled-jsx/css";

// export const generateMetadata= ({params})=>{
//   return{
//     title:`Product ${params.productId}`
//   }

// }

export const generateMetadata = async ({ params }) => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Iphone ${params.productId}`);
    }, 100);
  })
  return {
    title: `Product ${title}`,
  };
};




  export default function productdetails({ params }) {
    return (
      <>
        <h1>Product details page {params.productId}</h1>
      </>
    );
  };
