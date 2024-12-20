import Link from "next/link";

export default function product() {
  const productId = 100;
  return (
    <>
      <Link href="/">Home</Link>

      <h1>Product list</h1>
      <Link href="products/1">product 1</Link>
      <Link href="products/2">product 2</Link>
      <Link href="products/3" replace> 
      {/* replace prop is use for the back navigation in which we will not get back from the productid page to products page, but instead of that it will directly leads you to the home page. to check this behaviour, just click on the ero, available near the url section of the browser */}
        product 3
      </Link>
      <Link href={`products/${productId}`}>product {productId}</Link>
    </>
  );
}
