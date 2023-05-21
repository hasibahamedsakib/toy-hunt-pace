import { useEffect, useState } from "react";
import SingleCard from "./SingleCard/SingleCard";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://toy-hunt-place-server.vercel.app/gallery")
      .then((res) => res.json())
      .then((data) => {
        setGallery(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <>Loading.........</>;
  }

  return (
    <div className="pt-10 bg-teal-50">
      <div className="text-center ">
        <p className="text-xl font-mono text-teal-400 text-center  font-bold py-3">
          Our Popular Product
        </p>
        <h1 className="text-5xl font-bold text-slate-800 mb-16">
          Latest Car Gallery
        </h1>
      </div>

      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {gallery.map((gallery) => (
          <SingleCard gallery={gallery} key={gallery.id} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
