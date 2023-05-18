import { useEffect, useState } from "react";
import SingleCard from "./SingleCard/SingleCard";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("Gallery.json")
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
    <div
      className="py-20"
      style={{
        backgroundImage: `url('https://149410494.v2.pressablecdn.com/wp-content/uploads/2020/03/pattern-home.jpg')`,
      }}
    >
      <div className="text-center">
        <p className="text-xl font-mono text-orange-500 text-center  font-bold py-3">
          Recent Collection
        </p>
        <h1 className="text-5xl font-bold text-slate-800 mb-16">
          Latest Car Gallery{" "}
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
