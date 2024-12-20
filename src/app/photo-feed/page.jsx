import Link from "next/link";
import {images} from "./photodata";

export default function imgoutput() {
  return (
    <>
      <main className="container mx-auto">
        <h1 className="text-center text-3xl font-bold my-4">
          Some of My Best Collections
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {images.map((item)=>(
            <Link key={item.id} href={`/photo-feed/${item.id}`}>
                <img alt={item.name} src={item.src} className="w-full object-cover aspect-square"/> 
            </Link>
        ))}
        </div>
      </main>
    </>
  );
}
