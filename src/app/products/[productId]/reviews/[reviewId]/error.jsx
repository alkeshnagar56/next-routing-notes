"use client";

export default function ErrorBoundary({ error, reset }) {
  return (
    <>
      <div>
        <h1>
          {error.message}
      {/* This error message is coming from the page.jsx in the [reviewId] component where we had thrown an error. */}
        </h1>
         {reset && <button onClick={reset}>Try Again</button>}
      {/* reset will load again the page functionalities without loading entire webpage or other components. */}
      </div>
    </>
  );
}

// NOTE:- to use reset button , we also have to set the page.jsx component to the client component, else it would not refresh the page.

// error works by herarchy. and if we want to use it for the layout as well, we have to use it as a parent of the layout, that means, if we want to use this error handeling for the layout of [productId] component, we need to use it in the products solder, as it is a parent of [productId].