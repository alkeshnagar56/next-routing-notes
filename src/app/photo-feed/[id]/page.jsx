import {images} from "../photodata";

export default function photopage({ params }) {
  const photo = images.find((item) => item.id == params.id);
  return (
    <>
      <div className="container mx-auto my-10">
        <div className="w-1/2 mx-auto">
          <div>
            <h1 className="text-center text-3xl font-bold my-4">
              {photo.name}
            </h1>
          </div>
          <img alt={photo.name} src={photo.src} className="w-full object-cover aspect-square"/>

          <div className="bg-white py-4">
            <h3>{photo.photographer}</h3>
            <h3>{photo.location}</h3>
          </div>
        </div>
      </div>
    </>
  );
}
